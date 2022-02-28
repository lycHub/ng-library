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
IconDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: IconDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
IconDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.3", type: IconDirective, selector: "i[xmIcon]", inputs: { type: ["xmIcon", "type"] }, host: { properties: { "class.iconfont": "true" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: IconDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94bS11aS1saWJzL3NyYy9saWIvZGlyZWN0aXZlcy9pY29uL2ljb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsS0FBSyxFQUFzQyxNQUFNLGVBQWUsQ0FBQzs7QUFVaEcsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFBb0IsRUFBYyxFQUFVLEdBQWM7UUFBdEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVc7SUFBRyxDQUFDO0lBRTlELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLG9DQUFvQztRQUNwQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7MEdBWlUsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBTnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLElBQUksRUFBRTt3QkFDSixrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtpQkFDRjt5SEFHa0IsSUFBSTtzQkFBcEIsS0FBSzt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ljb25UeXBlfSBmcm9tICcuL3R5cGUnO1xuaW1wb3J0IHtUeXBlV2l0aFVuZGVmaW5lZH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaVt4bUljb25dJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuaWNvbmZvbnRdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8vIEBIb3N0QmluZGluZygnY2xhc3MuaWNvbmZvbnQnKSByZWFkb25seSBob3N0Q2xzID0gdHJ1ZTtcbiAgQElucHV0KCd4bUljb24nKSB0eXBlOiBUeXBlV2l0aFVuZGVmaW5lZDxJY29uVHlwZT47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmQyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gY2hhbmdlcztcbiAgICAvLyBjb25zb2xlLmxvZygndHlwZSBjaGFuZ2UnLCB0eXBlKTtcbiAgICBpZiAodHlwZS5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICB0aGlzLnJkMi5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpY29uLScgKyB0eXBlLnByZXZpb3VzVmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnJkMi5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpY29uLScgKyB0eXBlLmN1cnJlbnRWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==