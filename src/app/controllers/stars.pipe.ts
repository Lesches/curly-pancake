import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {
// trying to get the number of stars to display counter/5
  transform(value: any, args: any): any {
    let toReturn = '*';
    //  toReturn = Math.pow(toReturn, args.numIn);
    return toReturn.toString() + args.unit;
  }

}
