import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private el: ElementRef) {
  }


  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.textDecoration = 'underline';
    this.el.nativeElement.style.fontWeight = 'bold';

  }


  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.fontWeight = 'normal';

  }
}






//   import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//
// @Directive({
//   selector: '[Hover-Affect]'
// })
// export class HoverAffectDirective {
//   constructor(private el:ElementRef) {
//     this.affectType= 'type'
//     this.affectType ='tags'
//   }
//   @Input('Hover-Affect') affectType: string;
//
//
//
//   @HostListener('mouseenter') onMouseEnter() {
//     if (this.affectType === 'type') {
//       this.el.nativeElement.style.textDecoration = 'underline';
//     } else if (this. affectType === 'tag') {
//       this.el.nativeElement.style.fontWeight = 'bold';
//     }
//   }
//
//   @HostListener('mouseleave') onMouseLeave() {
//     if (this.affectType === 'type') {
//       this.el.nativeElement.style.textDecoration = 'none';
//     } else if (this.affectType === 'tag') {
//       this.el.nativeElement.style.fontWeight = 'normal';
//     }
//   }
// }










// import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//
// @Directive({
//   selector: '[Hover-Affect]'
// })
// export class HoverAffectDirective {
//   constructor(private el: ElementRef ) {}
//
//   @Input() hoverStyle: string; // new input to specify which style property to change
//
//   @HostListener('mouseover') onMouseOver() {
//     this.el.nativeElement.style[this.hoverStyle] = 'bold'; // change specified style to bold
//   }
//
//   @HostListener('mouseout') onMouseOut() {
//     this.el.nativeElement.style[this.hoverStyle] = 'normal'; // change specified style to normal
//   }
// }















