import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber',
  standalone: true,
})
export class ShortNumberPipe implements PipeTransform {
  transform(value: number): string {
    if (
      value === null ||
      value === undefined ||
      isNaN(value)
    ) {
      return '';
    }

    if (value >= 1000000000) {
      return (value / 1000000000).toFixed(1) + 'B';
    }

    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }

    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }


    return value.toString();
  }
}
