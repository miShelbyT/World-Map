import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[countryHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() countryHighlight = ''
    
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#FF0000');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.fill = color;
  }

}
