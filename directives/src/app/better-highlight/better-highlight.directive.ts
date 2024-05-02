import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor = 'transparent'
  @Input() highlightColor = 'skyblue'
  @HostBinding('style.backgroundColor') backgroungColor: string;

  constructor(private elRef : ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroungColor = this.defaultColor;    //to sop fro initial transparent color in 2nd p
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','skyblue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event)
  {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','skyblue')
    this.backgroungColor = this.highlightColor
  
  }
  @HostListener('mouseleave') mouseleave(eventData: Event)
  {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent')
    this.backgroungColor = this.defaultColor
  }

}
