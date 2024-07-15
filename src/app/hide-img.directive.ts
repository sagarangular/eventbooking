import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appHideImg]'
})
export class HideImgDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('error')
  onError() {
    const parent = this.el.nativeElement.parentNode.parentNode;
    this.renderer.setStyle(parent, 'display', 'none');
  }

}
