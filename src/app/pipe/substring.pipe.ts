import {Pipe, PipeTransform} from '@angular/core';


@Pipe ({
     name: 'substring'
})

export class SubstringPipe implements PipeTransform {
     transform(value: string, startIndex: number, endIndex: number) : any {
          if (!value) {
               return ''
          }
          if (startIndex < 0) {
               startIndex = 0;
          }
          if (endIndex > value.length) {
               endIndex = value.length;
          }
          return value.substring(startIndex, endIndex)
     }
}