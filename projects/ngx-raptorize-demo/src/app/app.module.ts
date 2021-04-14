import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  NgxRaptorizeModule,
  NGX_RAPTORIZE_CONFIG,
  NgxRaptorizeConfig,
} from 'ngx-raptorize';
import { assetsBase64 } from 'ngx-raptorize/assets';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [NgxRaptorizeModule, BrowserModule],
  providers: [
    {
      provide: NGX_RAPTORIZE_CONFIG,
      useValue: {
        raptorImgSrc: assetsBase64.raptorBase64,
        raptorSoundSrc: assetsBase64.raptorSoundMP3Base64,
      } as NgxRaptorizeConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
