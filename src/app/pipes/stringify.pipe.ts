import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xstringify'
})
export class StringifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return JSON.stringify(value);
  }

}
