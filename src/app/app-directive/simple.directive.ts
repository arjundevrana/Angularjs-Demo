import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {
  @Input() appSimple:String;
  constructor( private event:ElementRef) {
   // event.nativeElement.style.backgroundColor='green';
  }
 @HostListener  ('mouseenter') onMouseEnter(){
    this.highLightColor(this.appSimple);
 }
  @HostListener  ('mouseleave') onMouseLeave(){
    this.highLightColor('red');
  }
 public highLightColor(colorName : String){
   this.event.nativeElement.style.backgroundColor=colorName;
 }
}
