import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'filterarray'
})
export class FilterarrayPipe implements PipeTransform {

  transform(input: Content[], type: string): Content[] {
    // Filter by type:
    const output = input.filter((content) => {
      if(type === 'notype') return content.type == undefined;
      return content.type === type;
    })
    return output;
  }

}
