import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRaptorizeComponent } from './ngx-raptorize.component';
import { NGX_RAPTORIZE_CONFIG } from './ngx-raptorize.token';

describe('NgxRaptorizeComponent', () => {
  let component: NgxRaptorizeComponent;
  let fixture: ComponentFixture<NgxRaptorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxRaptorizeComponent],
      providers: [
        {
          provide: NGX_RAPTORIZE_CONFIG,
          useValue: {
            raptorImgSrc: '',
            raptorSoundSrc: '',
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRaptorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
