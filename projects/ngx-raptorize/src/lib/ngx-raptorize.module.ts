import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxRaptorizeComponent } from './ngx-raptorize.component';
import { KonamiCodeDirective } from './konamiCode.directive';
import {
  NGX_RAPTORIZE_CONFIG,
  NgxRaptorizeConfig,
} from './ngx-raptorize.token';
import { raptorBase64 } from './assets-base64/raptor-base64';
import { raptorSoundMP3Base64 } from './assets-base64/raptor-sound-mp3-base64';

@NgModule({
  declarations: [NgxRaptorizeComponent, KonamiCodeDirective],
  exports: [NgxRaptorizeComponent, KonamiCodeDirective],
  providers: [
    {
      provide: NGX_RAPTORIZE_CONFIG,
      useValue: {
        raptorImgSrc: raptorBase64,
        raptorSoundSrc: raptorSoundMP3Base64,
      } as NgxRaptorizeConfig,
    },
  ],
})
export class NgxRaptorizeModule {
  static withAssets(raptorizeConfig: NgxRaptorizeConfig): ModuleWithProviders {
    return {
      ngModule: NgxRaptorizeModule,
      providers: [
        {
          provide: NGX_RAPTORIZE_CONFIG,
          useValue: raptorizeConfig,
        },
      ],
    };
  }
}
