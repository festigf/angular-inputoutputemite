import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
//https://angular.io/guide/pipes

@Pipe({
  name: 'dateFormat'
})

   export class DateFormatPipe extends 
                DatePipe implements PipeTransform {
     transform(value: any, args?: any): any {
       return super.transform(value, "EEEE d MMMM y h:mm a");
     }
   }