/*
 * Public API Surface of ngx-raptorize
 */
import { raptorBase64 } from './lib/assets-base64/raptor-base64';
import { raptorSoundMP3Base64 } from './lib/assets-base64/raptor-sound-mp3-base64';

export * from './lib/konamiCode.directive';
export * from './lib/ngx-raptorize.component';
export * from './lib/ngx-raptorize.module';
export * from './lib/ngx-raptorize.token';

export const assetsBase64 = {
  raptorBase64,
  raptorSoundMP3Base64,
};
