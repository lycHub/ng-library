import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {IconType} from './type';
import {TypeWithUndefined} from "../../core";

@Directive({
  selector: 'i[xmIcon]',
  host: {
    '[class.iconfont]': 'true'
  }
})
export class IconDirective implements OnChanges {
  // @HostBinding('class.iconfont') readonly hostCls = true;
  @Input('xmIcon') type: TypeWithUndefined<IconType>;
  constructor(private el: ElementRef, private rd2: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { type } = changes;
    // console.log('type change', type);
    if (type.previousValue) {
      this.rd2.removeClass(this.el.nativeElement, 'icon-' + type.previousValue);
    }
    this.rd2.addClass(this.el.nativeElement, 'icon-' + type.currentValue);
  }
}
