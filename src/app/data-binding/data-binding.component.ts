import { Component } from '@angular/core';
import { Car } from '../services/car.service';
import { LoggerService } from '../services/logger.service';
import { BaseService } from '../services/base.service';
import { BetterBaseService } from '../services/better-base.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  providers: [
    Car,
    LoggerService,
    { provide: BaseService, useClass: BetterBaseService },
  ],
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
  constructor(
    private car: Car,
    private logger: LoggerService,
    private $base: BaseService
  ) {
    console.log(car.count);
    logger.log('Data binding');
    $base.getUser().subscribe();
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
