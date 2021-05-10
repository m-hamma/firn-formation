import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
  name:'cb',
})
export class CbPipe implements PipeTransform {
  transform(value:any, n:number =4) {
    return `${ value.slice(0,n)} ${new Array(17-2*n).join('X')} ${value.slice(-n,value.legnth)}`;
  }
}
