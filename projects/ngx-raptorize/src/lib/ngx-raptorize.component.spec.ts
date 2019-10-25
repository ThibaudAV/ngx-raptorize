import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRaptorizeComponent } from './ngx-raptorize.component';

describe('NgxRaptorizeComponent', () => {
  let component: NgxRaptorizeComponent;
  let fixture: ComponentFixture<NgxRaptorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxRaptorizeComponent],
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
