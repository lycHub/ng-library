import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class IconDirective {
    constructor(el, rd2) {
        this.el = el;
        this.rd2 = rd2;
    }
    ngOnChanges(changes) {
        const { type } = changes;
        // console.log('type change', type);
        if (type.previousValue) {
            this.rd2.removeClass(this.el.nativeElement, 'icon-' + type.previousValue);
        }
        this.rd2.addClass(this.el.nativeElement, 'icon-' + type.currentValue);
    }
}
IconDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: IconDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
IconDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.5", type: IconDirective, selector: "i[xmIcon]", inputs: { type: ["xmIcon", "type"] }, host: { properties: { "class.iconfont": "true" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: IconDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'i[xmIcon]',
                    host: {
                        '[class.iconfont]': 'true'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { type: [{
                type: Input,
                args: ['xmIcon']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy94bS11aS1saWJzL3NyYy9kaXJlY3RpdmVzL2ljb24vaWNvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxLQUFLLEVBQXNDLE1BQU0sZUFBZSxDQUFDOztBQVVoRyxNQUFNLE9BQU8sYUFBYTtJQUd4QixZQUFvQixFQUFjLEVBQVUsR0FBYztRQUF0QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBVztJQUFHLENBQUM7SUFFOUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDekIsb0NBQW9DO1FBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RSxDQUFDOzswR0FaVSxhQUFhOzhGQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFOekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsSUFBSSxFQUFFO3dCQUNKLGtCQUFrQixFQUFFLE1BQU07cUJBQzNCO2lCQUNGO3lIQUdrQixJQUFJO3NCQUFwQixLQUFLO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SWNvblR5cGV9IGZyb20gJy4vdHlwZSc7XG5pbXBvcnQge1R5cGVXaXRoVW5kZWZpbmVkfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaVt4bUljb25dJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuaWNvbmZvbnRdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8vIEBIb3N0QmluZGluZygnY2xhc3MuaWNvbmZvbnQnKSByZWFkb25seSBob3N0Q2xzID0gdHJ1ZTtcbiAgQElucHV0KCd4bUljb24nKSB0eXBlOiBUeXBlV2l0aFVuZGVmaW5lZDxJY29uVHlwZT47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmQyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gY2hhbmdlcztcbiAgICAvLyBjb25zb2xlLmxvZygndHlwZSBjaGFuZ2UnLCB0eXBlKTtcbiAgICBpZiAodHlwZS5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICB0aGlzLnJkMi5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpY29uLScgKyB0eXBlLnByZXZpb3VzVmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnJkMi5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpY29uLScgKyB0eXBlLmN1cnJlbnRWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==