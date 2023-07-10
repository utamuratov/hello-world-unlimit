import { Component } from '@angular/core';
import { Car } from '../services/car.service';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css'],
  providers: [Car],
})
export class NgTemplateComponent {
  constructor(private car: Car) {
    car.count++;
    console.log(car.count);
  }

  getCarCount() {
    return this.car.count;
  }
}
