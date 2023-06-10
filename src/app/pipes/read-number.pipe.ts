import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readNumber',
})
export class ReadNumber implements PipeTransform {
  transform(digit: number, isUppercase = false, prefix?: number) {
    let result;
    switch (digit) {
      case 1:
        result = 'Bir';
        break;
      case 2:
        result = 'Ikki';
        break;
      case 3:
        result = 'Uch';
        break;

      default:
        return "Bunaqa son yo'q";
    }

    if (prefix) result = prefix + ' - ' + result;
    return isUppercase ? result.toUpperCase() : result;
  }
}
