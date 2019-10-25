import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { raptorBase64 } from '../assets/raptor-base64';

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
        transition: right 2000ms cubic-bezier(0.42, 0, 0.58, 1),
          bottom 1000ms cubic-bezier(0.42, 0, 0.58, 1) 300ms;
      }
    `,
  ],
})
export class NgxRaptorizeComponent {
  raptorBase64 = raptorBase64;

  @ViewChild('raptor', { static: false })
  raptor: ElementRef;

  constructor(private renderer: Renderer2) {}

  run() {
    this.renderer.addClass(this.raptor.nativeElement, 'show');
    setTimeout(() => {
      this.renderer.removeClass(this.raptor.nativeElement, 'show');
    }, 2000);
  }
}
