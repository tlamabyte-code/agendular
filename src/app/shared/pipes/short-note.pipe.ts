import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNote'
})
export class ShortNotePipe implements PipeTransform {

  textLimit = 25

  transform(text: string): string {
    if (text.length > this.textLimit) {
      return text.substring(0, this.textLimit - 3) + '...'
    } else {
      return text
    }
  }

}
