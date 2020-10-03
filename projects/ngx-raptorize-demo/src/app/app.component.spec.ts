import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxRaptorizeModule } from 'ngx-raptorize';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxRaptorizeModule],
        declarations: [AppComponent],
      }).compileComponents();
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
