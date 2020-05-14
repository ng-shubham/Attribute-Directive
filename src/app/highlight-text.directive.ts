import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.textHeighlight('yellow', 'blue', 'center', '40px');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.textHeighlight(null, null, null, null);
  }

  constructor(private el: ElementRef) { }

  private textHeighlight(bgColor, textColor, alignment, fontsize){
    this.el.nativeElement.style.backgroundColor = bgColor ;
    this.el.nativeElement.style.color = textColor;
    this.el.nativeElement.style.textAlign = alignment;
    this.el.nativeElement.style.fontSize = fontsize;
  }
}
