//importing the required interface for defining the custom pipes
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform( value:any[], orderType:boolean): any[] {//this method will be called automatically whenever the pipe is used in view.
    
    value.sort((a:any, b:any ) => {//calling Array.sort method by passing the custom comparator to it.
      
      let temp1 = a.name;
      let temp2 = b.name;
      if( temp1 == undefined && temp2 == undefined ) return 0;//cheching for undefined values.
      if( temp1 == undefined && temp2 != undefined ) return orderType ? 1: -1;
      if( temp1 != undefined && temp2 == undefined ) return orderType ? -1: 1;
      if( temp1 == temp2) return 0;//equality check

      //checking for the lesser or greater value and arranging accordingly.
      return orderType ? (temp1.toString().toLowerCase() > temp2.toString().toLowerCase()? -1 :1):(temp2.toString().toLowerCase() > temp1.toString().toLowerCase()? -1 :1);
    });
    return value;//finally returning the sorted array to the view for display.
  }
}
