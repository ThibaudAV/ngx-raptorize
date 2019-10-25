import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ngxKonamiCode]',
})
export class KonamiCodeDirective {
  private konamiCodeDefault = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  @Output()
  private konami: EventEmitter<void> = new EventEmitter<void>();

  private sequence: string[] = [];

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key.toString();

    if (key) {
      this.sequence.push(key);

      if (this.sequence.length > this.konamiCodeDefault.length) {
        this.sequence.shift();
      }

      if (this.isKonamiCode()) {
        this.konami.emit();
      }
    }
  }

  isKonamiCode(): boolean {
    return this.konamiCodeDefault.every(
      (code, index) => code === this.sequence[index],
    );
  }
}
