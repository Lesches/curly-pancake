import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: any, args: any): any {
    let toReturn = name / 5;
    //  toReturn = Math.pow(toReturn, args.numIn);
    return toReturn.toString() + args.unit;
  }

}
