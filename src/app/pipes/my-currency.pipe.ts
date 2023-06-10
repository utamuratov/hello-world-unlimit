import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency',
})
export class MyCurrencyPipe extends DecimalPipe implements PipeTransform {
  override transform(value: any, suffix?: string): any {
    let number = super.transform(value);
    if (number != undefined && number != null) {
      number = number.replace(new RegExp(',', 'g'), ' ');
    }

    if (suffix) {
      number = `${number} ${suffix}`;
    }
    return number;
  }
}
