import { Directive, ElementRef , HostListener } from '@angular/core';
//HostListener permet de lier des directives à des évènement
@Directive({
  selector: '[SpvieBorderCard]'
  
})

export class BorderCardDirective {

  constructor( private el : ElementRef) {
    this.setBorder( "#FF7F50") ,
    this.setHeigth(50)
 
   }
   setHeigth( heigth:number){
    this.el.nativeElement.style.heigth =`$(heigth)px`
   }
  setBorder(color : string){
    let border = `solid 4px` + color
    this.el.nativeElement.style.border = border
  }
  @HostListener('mouseenter') onMouseEnter(){
 this.setBorder('#999999')
  };
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder( "#FF7F50")
  } 

}
