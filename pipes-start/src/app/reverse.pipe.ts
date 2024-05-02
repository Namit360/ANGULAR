import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {


  transform(value: string): string 
  {
    if (!value) return value; // Return unchanged if value is null or undefined
    return value.split('').reverse().join('');
  }

}
