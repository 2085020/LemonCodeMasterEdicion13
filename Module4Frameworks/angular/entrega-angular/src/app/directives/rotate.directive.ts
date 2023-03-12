import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[rotate]'
})
export class RotateDirective {

  @Input()
  step:number = 0;

  @Input("rotate")
  sdeg:string = "0";

  deg:number = 0;
  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.deg = parseInt(this.sdeg);
    this.rotateElement(this.deg);
  }

  @HostListener('click')
  onClickEvent() {
    this.deg = this.deg+this.step;
    this.rotateElement(this.deg);

  }

  rotateElement(degs: number) {
    this.el.nativeElement.style.transform = "rotate("+degs+"deg)";
  }

}
