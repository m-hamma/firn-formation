import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cb1'
})
export class Cb1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
