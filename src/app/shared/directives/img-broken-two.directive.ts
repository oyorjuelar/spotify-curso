import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBrokenTwo]'
})
export class ImgBrokenTwoDirective {

   @Input() customImg: string = ''

  @HostListener('error') handleError():void{
    const elNative = this.ElHost.nativeElement;
    console.log('Esta imagen revento ->',this.ElHost);
    elNative.src = this.customImg;
  }


  constructor(private ElHost: ElementRef) {

    console.log(this.ElHost);
  }
}
