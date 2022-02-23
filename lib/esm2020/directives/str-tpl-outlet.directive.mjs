import { Directive, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class StrTplOutletDirective {
    constructor(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.xmStrTplOutlet = '';
    }
    ngOnChanges({ xmStrTplOutlet }) {
        if (xmStrTplOutlet) {
            this.viewContainer.clear();
            const template = (this.xmStrTplOutlet instanceof TemplateRef) ? this.xmStrTplOutlet : this.templateRef;
            this.viewContainer.createEmbeddedView(template, this.xmStrTplOutletContext);
        }
    }
}
StrTplOutletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: StrTplOutletDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
StrTplOutletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.3", type: StrTplOutletDirective, selector: "[xmStrTplOutlet]", inputs: { xmStrTplOutlet: "xmStrTplOutlet", xmStrTplOutletContext: "xmStrTplOutletContext" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: StrTplOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xmStrTplOutlet]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { xmStrTplOutlet: [{
                type: Input
            }], xmStrTplOutletContext: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyLXRwbC1vdXRsZXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMveG0tdWktbGlicy9zcmMvZGlyZWN0aXZlcy9zdHItdHBsLW91dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQTRCLFdBQVcsRUFBbUIsTUFBTSxlQUFlLENBQUM7O0FBTXhHLE1BQU0sT0FBTyxxQkFBcUI7SUFHaEMsWUFBb0IsYUFBK0IsRUFBVSxXQUEyQjtRQUFwRSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFGL0UsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO0lBRXNDLENBQUM7SUFDN0YsV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFpQjtRQUMzQyxJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsWUFBWSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN2RyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUM3RTtJQUNILENBQUM7O2tIQVZVLHFCQUFxQjtzR0FBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7aUlBRVUsY0FBYztzQkFBdEIsS0FBSztnQkFDRyxxQkFBcUI7c0JBQTdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1R5cGVXaXRoVW5kZWZpbmVkfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3htU3RyVHBsT3V0bGV0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0clRwbE91dGxldERpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgeG1TdHJUcGxPdXRsZXQ6IFRlbXBsYXRlUmVmPFQ+IHwgc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgeG1TdHJUcGxPdXRsZXRDb250ZXh0OiBUeXBlV2l0aFVuZGVmaW5lZDxUPjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFQ+KSB7IH1cclxuICBuZ09uQ2hhbmdlcyh7IHhtU3RyVHBsT3V0bGV0IH06IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh4bVN0clRwbE91dGxldCkge1xyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgY29uc3QgdGVtcGxhdGUgPSAodGhpcy54bVN0clRwbE91dGxldCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSA/IHRoaXMueG1TdHJUcGxPdXRsZXQgOiB0aGlzLnRlbXBsYXRlUmVmO1xyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlLCB0aGlzLnhtU3RyVHBsT3V0bGV0Q29udGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==