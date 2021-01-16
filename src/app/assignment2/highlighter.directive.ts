import { Directive,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private element:ElementRef) {
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
    this.element.nativeElement.style.cursor = 'pointer';
    this.element.nativeElement.style.transition = '1s';
  }
}
