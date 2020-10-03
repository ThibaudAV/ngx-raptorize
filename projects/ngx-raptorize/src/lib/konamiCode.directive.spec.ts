import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KonamiCodeDirective } from './konamiCode.directive';

const upArrow = new KeyboardEvent('keydown', { key: 'ArrowUp' });
const downArrow = new KeyboardEvent('keydown', { key: 'ArrowDown' });
const leftArrow = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
const rightArrow = new KeyboardEvent('keydown', { key: 'ArrowRight' });
const bKey = new KeyboardEvent('keydown', { key: 'b' });
const aKey = new KeyboardEvent('keydown', { key: 'a' });

@Component({
  template: ` <div class="some-div" ngxKonamiCode (konami)="sayOk()"></div> `,
})
class TestComponent {
  sayOk() {
    return 'ok';
  }
}

describe('KonamiCodeDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, KonamiCodeDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    spyOn(component, 'sayOk');
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  describe('when proper sequence is entered', () => {
    it('should trigger konami event', () => {
      document.dispatchEvent(upArrow);
      document.dispatchEvent(upArrow);
      document.dispatchEvent(downArrow);
      document.dispatchEvent(downArrow);
      document.dispatchEvent(leftArrow);
      document.dispatchEvent(rightArrow);
      document.dispatchEvent(leftArrow);
      document.dispatchEvent(rightArrow);
      document.dispatchEvent(bKey);
      document.dispatchEvent(aKey);

      expect(component.sayOk).toHaveBeenCalled();
    });
  });

  describe('when improper sequence is entered', () => {
    it('should NOT trigger konami event', () => {
      document.dispatchEvent(upArrow);
      document.dispatchEvent(downArrow);
      document.dispatchEvent(downArrow);
      document.dispatchEvent(downArrow);
      document.dispatchEvent(leftArrow);
      document.dispatchEvent(rightArrow);
      document.dispatchEvent(leftArrow);
      document.dispatchEvent(rightArrow);
      document.dispatchEvent(bKey);
      document.dispatchEvent(aKey);

      expect(component.sayOk).not.toHaveBeenCalled();
    });
  });
});
