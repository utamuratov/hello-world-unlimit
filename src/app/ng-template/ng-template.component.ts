import { Component } from '@angular/core';
import { Car } from '../services/car.service';
import { CanComponentDeactivate } from '../guards/deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css'],
  providers: [Car],
})
export class NgTemplateComponent implements CanComponentDeactivate {
  constructor(private car: Car) {
    car.count++;
    console.log(car.count);
  }

  isFilled = true;

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.isFilled;
  }

  getCarCount() {
    return this.car.count;
  }
}
