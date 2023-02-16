import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private elm: ElementRef) {
  }

  private addundeline() {
    this.elm.nativeElement.style.textDecoration = 'underline';
  }


private removeunderline() {
  this.elm.nativeElement.style.textDecoration = '';
}

  private makeitbold() {
    this.elm.nativeElement.style.textDecoration = 'bold';
  }

  private makeitnormal() {
    this.elm.nativeElement.style.textDecoration = 'normal';
  }


}




