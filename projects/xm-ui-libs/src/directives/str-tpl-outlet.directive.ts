import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {TypeWithUndefined} from "../utils";

@Directive({
  selector: '[xmStrTplOutlet]'
})
export class StrTplOutletDirective<T> implements OnChanges {
  @Input() xmStrTplOutlet: TemplateRef<T> | string = '';
  @Input() xmStrTplOutletContext: TypeWithUndefined<T>;
  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<T>) { }
  ngOnChanges({ xmStrTplOutlet }: SimpleChanges) {
    if (xmStrTplOutlet) {
      this.viewContainer.clear();
      const template = (this.xmStrTplOutlet instanceof TemplateRef) ? this.xmStrTplOutlet : this.templateRef;
      this.viewContainer.createEmbeddedView(template, this.xmStrTplOutletContext);
    }
  }
}
