import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Inject,
} from '@angular/core';
import {
  NGX_RAPTORIZE_CONFIG,
  NgxRaptorizeConfig,
} from './ngx-raptorize.token';

@Component({
  selector: 'ngx-raptorize',
  template: `
    <img
      #raptor
      ngxKonamiCode
      (konami)="run()"
      class="raptor"
      [src]="raptorizeConfig.raptorImgSrc"
    />
  `,
  styles: [
    `
      .raptor {
        z-index: 666666666;
        position: fixed;
        right: -400px;
        bottom: -280px;
        transition: none;
      }

      .raptor.show {
        right: 100%;
        bottom: -100px;
        -webkit-transition: right 2200ms cubic-bezier(0.42, 0, 0.58, 1) 400ms,
          bottom 1000ms cubic-bezier(0.42, 0, 0.58, 1) 800ms;
        -moz-transition: right 2200ms cubic-bezier(0.42, 0, 0.58, 1) 400ms,
          bottom 1000ms cubic-bezier(0.42, 0, 0.58, 1) 800ms;
        -o-transition: right 2200ms cubic-bezier(0.42, 0, 0.58, 1) 400ms,
          bottom 1000ms cubic-bezier(0.42, 0, 0.58, 1) 800ms;
        transition: right 2200ms cubic-bezier(0.42, 0, 0.58, 1) 400ms,
          bottom 1000ms cubic-bezier(0.42, 0, 0.58, 1) 800ms;
      }
    `,
  ],
})
export class NgxRaptorizeComponent {
  @ViewChild('raptor')
  raptor!: ElementRef;

  constructor(
    @Inject(NGX_RAPTORIZE_CONFIG) public raptorizeConfig: NgxRaptorizeConfig,
    private renderer: Renderer2,
  ) {}

  run() {
    this.renderer.addClass(this.raptor.nativeElement, 'show');
    this.playAudio(this.raptorizeConfig.raptorSoundSrc);
    setTimeout(() => {
      this.renderer.removeClass(this.raptor.nativeElement, 'show');
    }, 2500);
  }

  private playAudio(src: string) {
    const audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }
}
