import { InjectionToken } from '@angular/core';

export interface NgxRaptorizeConfig {
  raptorImgSrc: string;
  raptorSoundSrc: string;
}

export const NGX_RAPTORIZE_CONFIG = new InjectionToken<NgxRaptorizeConfig>(
  'NgxRaptorizeConfig',
);
