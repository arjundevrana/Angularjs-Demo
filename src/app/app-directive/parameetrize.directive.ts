import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';


@Directive({
  selector: '[appParameetrize]'
})
export class ParameetrizeDirective {

  constructor( private templateRef :TemplateRef<any>,
              private viewContainer : ViewContainerRef ) { }

              @Input() set appParameetrize(isHidden: boolean){
              if(!isHidden){
                this.viewContainer.createEmbeddedView(this.templateRef);
              } else if(isHidden){
                this.viewContainer.clear();
              }
              }

}
