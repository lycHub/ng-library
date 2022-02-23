import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BtnDirective {
    constructor() {
        this.xmBlock = false;
        this.xmCircle = false;
    }
}
BtnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BtnDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BtnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.5", type: BtnDirective, selector: "a[xmBtn], button[xmBtn]", inputs: { xmBlock: "xmBlock", xmCircle: "xmCircle" }, host: { properties: { "class.xm-btn": "true", "class.xm-btn-block": "this.xmBlock", "class.xm-btn-circle": "this.xmCircle" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BtnDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG0tYnRuLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3htLXVpLWxpYnMvc3JjL2RpcmVjdGl2ZXMveG0tYnRuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBUTVELE1BQU0sT0FBTyxZQUFZO0lBR3ZCO1FBRjRDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzlDLENBQUM7O3lHQUhOLFlBQVk7NkZBQVosWUFBWTsyRkFBWixZQUFZO2tCQU54QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLElBQUksRUFBRTt3QkFDSixnQkFBZ0IsRUFBRSxNQUFNO3FCQUN6QjtpQkFDRjswRUFFNkMsT0FBTztzQkFBbEQsS0FBSzs7c0JBQUksV0FBVzt1QkFBQyxvQkFBb0I7Z0JBQ0csUUFBUTtzQkFBcEQsS0FBSzs7c0JBQUksV0FBVzt1QkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYVt4bUJ0bl0sIGJ1dHRvblt4bUJ0bl0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MueG0tYnRuXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ0bkRpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy54bS1idG4tYmxvY2snKSB4bUJsb2NrID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy54bS1idG4tY2lyY2xlJykgeG1DaXJjbGUgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iXX0=