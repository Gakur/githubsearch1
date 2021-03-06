import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeartbeat]'
})
export class HeartbeatDirective {

  constructor( private elem: ElementRef) { }
  @HostListener('mouseover') onMouseOver(){
    this.textLight("#777");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.textLight("#fff");
  }

  private textLight(action:string){
    this.elem.nativeElement.style.color = action;
  }
}

