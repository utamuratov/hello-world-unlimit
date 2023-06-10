import { Component } from '@angular/core';
import { ReadNumber } from './read-number.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  isAdd = true;
  n = 10;

  text = 'Unlimit';

  today = new Date();

  digit = 3;

  pow(degree: number) {
    return Math.pow(this.n, degree);
  }

  toUppercase(text: string) {
    return text.toUpperCase();
  }
}
