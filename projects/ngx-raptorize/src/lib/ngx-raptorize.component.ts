import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { raptorBase64 } from '../assets/raptor-base64';
import { raptorSoundMP3Base64 } from '../assets/raptor-sound-mp3-base64';

@Component({
  selector: 'ngx-raptorize',
  template: `
    <img
      #raptor
      ngxKonamiCode
      (konami)="run()"
      class="raptor"
      src="{{ raptorBase64 }}"
    />
  `,
  styles: [
    `
      .raptor {
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
  raptorBase64 = raptorBase64;
  raptorSoundMP3Base64 = raptorSoundMP3Base64;

  @ViewChild('raptor', { static: false })
  raptor: ElementRef;

  constructor(private renderer: Renderer2) {}

  run() {
    this.renderer.addClass(this.raptor.nativeElement, 'show');
    this.playAudio();
    setTimeout(() => {
      this.renderer.removeClass(this.raptor.nativeElement, 'show');
    }, 2500);
  }

  private playAudio() {
    const audio = new Audio();
    audio.src = raptorSoundMP3Base64;
    audio.load();
    audio.play();
  }
}
