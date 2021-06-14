import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  NgxRaptorizeConfig,
  NgxRaptorizeModule,
  NGX_RAPTORIZE_CONFIG,
} from 'ngx-raptorize';
import { raptorBase64 } from 'ngx-raptorize/assets/raptor-base64';
import { raptorSoundMP3Base64 } from 'ngx-raptorize/assets/raptor-sound-mp3-base64';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxRaptorizeModule],
        declarations: [AppComponent],
        providers: [
          {
            provide: NGX_RAPTORIZE_CONFIG,
            useValue: {
              raptorImgSrc: raptorBase64,
              raptorSoundSrc: raptorSoundMP3Base64,
            } as NgxRaptorizeConfig,
          },
        ],
      }).compileComponents();
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
