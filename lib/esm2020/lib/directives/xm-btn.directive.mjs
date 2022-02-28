import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BtnDirective {
    constructor() {
        this.xmBlock = false;
        this.xmCircle = false;
    }
}
BtnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: BtnDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BtnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.3", type: BtnDirective, selector: "a[xmBtn], button[xmBtn]", inputs: { xmBlock: "xmBlock", xmCircle: "xmCircle" }, host: { properties: { "class.xm-btn": "true", "class.xm-btn-block": "this.xmBlock", "class.xm-btn-circle": "this.xmCircle" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: BtnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'a[xmBtn], button[xmBtn]',
                    host: {
                        '[class.xm-btn]': 'true'
                    }
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { xmBlock: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.xm-btn-block']
            }], xmCircle: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.xm-btn-circle']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG0tYnRuLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3htLXVpLWxpYnMvc3JjL2xpYi9kaXJlY3RpdmVzL3htLWJ0bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQVE1RCxNQUFNLE9BQU8sWUFBWTtJQUd2QjtRQUY0QyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUM5QyxDQUFDOzt5R0FITixZQUFZOzZGQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFOeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxJQUFJLEVBQUU7d0JBQ0osZ0JBQWdCLEVBQUUsTUFBTTtxQkFDekI7aUJBQ0Y7MEVBRTZDLE9BQU87c0JBQWxELEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsb0JBQW9CO2dCQUNHLFFBQVE7c0JBQXBELEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2FbeG1CdG5dLCBidXR0b25beG1CdG5dJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLnhtLWJ0bl0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdG5EaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MueG0tYnRuLWJsb2NrJykgeG1CbG9jayA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MueG0tYnRuLWNpcmNsZScpIHhtQ2lyY2xlID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIl19