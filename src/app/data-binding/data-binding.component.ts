import { Component } from '@angular/core';
import { Car } from '../services/car.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  providers: [Car],
})
export class DataBindingComponent {
  /**
   *
   */
  title = 'I am Parent';

  /**
   *
   */
  count = 10;

  /**
   *
   */
  text = 'Salom';

  /**
   *
   */
  constructor(private car: Car) {
    console.log(car.count);
  }

  /**
   *
   */
  show() {
    alert(this.text);
  }

  getCar() {
    return this.car;
  }
}
