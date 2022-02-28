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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyLXRwbC1vdXRsZXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMveG0tdWktbGlicy9zcmMvbGliL2RpcmVjdGl2ZXMvc3RyLXRwbC1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUE0QixXQUFXLEVBQW1CLE1BQU0sZUFBZSxDQUFDOztBQU14RyxNQUFNLE9BQU8scUJBQXFCO0lBR2hDLFlBQW9CLGFBQStCLEVBQVUsV0FBMkI7UUFBcEUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBRi9FLG1CQUFjLEdBQTRCLEVBQUUsQ0FBQztJQUVzQyxDQUFDO0lBQzdGLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBaUI7UUFDM0MsSUFBSSxjQUFjLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDN0U7SUFDSCxDQUFDOztrSEFWVSxxQkFBcUI7c0dBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCO2lJQUVVLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUeXBlV2l0aFVuZGVmaW5lZH0gZnJvbSBcIi4uL2NvcmVcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3htU3RyVHBsT3V0bGV0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0clRwbE91dGxldERpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgeG1TdHJUcGxPdXRsZXQ6IFRlbXBsYXRlUmVmPFQ+IHwgc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgeG1TdHJUcGxPdXRsZXRDb250ZXh0OiBUeXBlV2l0aFVuZGVmaW5lZDxUPjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFQ+KSB7IH1cclxuICBuZ09uQ2hhbmdlcyh7IHhtU3RyVHBsT3V0bGV0IH06IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh4bVN0clRwbE91dGxldCkge1xyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgY29uc3QgdGVtcGxhdGUgPSAodGhpcy54bVN0clRwbE91dGxldCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSA/IHRoaXMueG1TdHJUcGxPdXRsZXQgOiB0aGlzLnRlbXBsYXRlUmVmO1xyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlLCB0aGlzLnhtU3RyVHBsT3V0bGV0Q29udGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==