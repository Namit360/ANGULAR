import { Directive, Input, TemplateRef, ViewContainerRef,  } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(value: boolean){
    if(!value){
      this.vRef.createEmbeddedView(this.templateRef);
    }else{
      this.vRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vRef: ViewContainerRef) { }

}
