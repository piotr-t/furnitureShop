import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[add]'
})
export class AppDirectiveDirective {

@Input() divColor = 'green';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.divColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

}
