import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(colorList: any, input: any): any {
    if(input === undefined){
      return colorList;
    }
    return  colorList.filter(function (color) {
      console.log("Color inside colorList"+color);
      return color.toLowerCase().includes(input.toLowerCase())
    });
  }

}
