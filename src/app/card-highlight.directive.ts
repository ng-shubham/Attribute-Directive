import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHighlight]'
})
export class CardHighlightDirective {

  @HostListener('click') btn(){
    this.onClick('#007bff', '1px solid green');
  }

  @HostListener('mouseenter') btn1(){
    this.onClick('#ffc107', '1px solid red'); 
  }

  constructor(private el: ElementRef) { }

  private onClick(bgcolor, borderColor){
    this.el.nativeElement.style.backgroundColor = bgcolor;
    this.el.nativeElement.style.border = borderColor;
  }
}
