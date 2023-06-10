import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyLetter]',
})
export class OnlyLetterDirective {
  @HostListener('input', ['$event'])
  input(event: any) {
    const target = event.target;
    target.value = target.value.replace(/[^\p{Letter}]/u, '');
  }
}
