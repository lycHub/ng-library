var _TooltipDirective_instances, _TooltipDirective_showDelay, _TooltipDirective_disabled, _TooltipDirective_overlayRef, _TooltipDirective_portal, _TooltipDirective_tooltipInstance, _TooltipDirective_enterEventHandler, _TooltipDirective_leaveEventHandler, _TooltipDirective_positionConfig, _TooltipDirective_listenLeaveEvent, _TooltipDirective_detach, _TooltipDirective_updateMessage, _TooltipDirective_updateTooltipClass, _TooltipDirective_createOverlay, _TooltipDirective_updatePosition;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Directive, Input } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipComponent } from "./component";
import { coerceBooleanProperty, coerceNumberProperty } from "@angular/cdk/coercion";
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export const CLASS_PREFIX = 'xm';
export const CLASS_TIP = 'tooltip';
export const CLASS_PANEL = 'panel';
export class TooltipDirective {
    constructor(hostElementRef, rd2, overlay, cdr, viewContainer) {
        this.hostElementRef = hostElementRef;
        this.rd2 = rd2;
        this.overlay = overlay;
        this.cdr = cdr;
        this.viewContainer = viewContainer;
        _TooltipDirective_instances.add(this);
        this.message = '';
        this.offset = 4;
        this.tooltipClass = '';
        this.position = 'top';
        _TooltipDirective_showDelay.set(this, 0);
        _TooltipDirective_disabled.set(this, false);
        this.hideDelay = 0;
        _TooltipDirective_overlayRef.set(this, void 0);
        _TooltipDirective_portal.set(this, void 0);
        _TooltipDirective_tooltipInstance.set(this, void 0);
        _TooltipDirective_enterEventHandler.set(this, () => { });
        _TooltipDirective_leaveEventHandler.set(this, () => { });
        _TooltipDirective_positionConfig.set(this, {
            top: {
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom',
                offsetY: -this.offset
            },
            bottom: {
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top',
                offsetY: this.offset
            },
            left: {
                originX: 'start',
                originY: 'center',
                overlayX: 'end',
                overlayY: 'center',
                offsetX: -this.offset
            },
            right: {
                originX: 'end',
                originY: 'center',
                overlayX: 'start',
                overlayY: 'center',
                offsetX: this.offset
            },
        });
    }
    set showDelay(value) {
        __classPrivateFieldSet(this, _TooltipDirective_showDelay, coerceNumberProperty(value), "f");
    }
    get showDelay() {
        return __classPrivateFieldGet(this, _TooltipDirective_showDelay, "f");
    }
    set disabled(value) {
        __classPrivateFieldSet(this, _TooltipDirective_disabled, coerceBooleanProperty(value), "f");
    }
    get disabled() {
        return __classPrivateFieldGet(this, _TooltipDirective_disabled, "f");
    }
    ngOnChanges({ tooltipClass, position }) {
        if (tooltipClass?.currentValue) {
            __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updateTooltipClass).call(this);
        }
        if (position && __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f")) {
            __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updatePosition).call(this);
        }
    }
    ngAfterViewInit() {
        if (!this.disabled && this.hostElementRef.nativeElement) {
            __classPrivateFieldSet(this, _TooltipDirective_enterEventHandler, this.rd2.listen(this.hostElementRef.nativeElement, 'mouseenter', () => {
                __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_listenLeaveEvent).call(this);
                this.show();
            }), "f");
        }
    }
    show() {
        if (!__classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f")) {
            __classPrivateFieldSet(this, _TooltipDirective_overlayRef, __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_createOverlay).call(this), "f");
        }
        if (!__classPrivateFieldGet(this, _TooltipDirective_portal, "f")) {
            __classPrivateFieldSet(this, _TooltipDirective_portal, new ComponentPortal(TooltipComponent, this.viewContainer), "f");
        }
        __classPrivateFieldSet(this, _TooltipDirective_tooltipInstance, __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f").attach(__classPrivateFieldGet(this, _TooltipDirective_portal, "f")).instance, "f");
        __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updateTooltipClass).call(this);
        __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updateMessage).call(this);
        __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updatePosition).call(this);
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f").show(this.showDelay);
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f").hideSubject.pipe().subscribe(() => {
            __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_detach).call(this);
        });
    }
    hide() {
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f")?.hide(this.hideDelay);
    }
    ngOnDestroy() {
        console.log('directive destroy');
    }
}
_TooltipDirective_showDelay = new WeakMap(), _TooltipDirective_disabled = new WeakMap(), _TooltipDirective_overlayRef = new WeakMap(), _TooltipDirective_portal = new WeakMap(), _TooltipDirective_tooltipInstance = new WeakMap(), _TooltipDirective_enterEventHandler = new WeakMap(), _TooltipDirective_leaveEventHandler = new WeakMap(), _TooltipDirective_positionConfig = new WeakMap(), _TooltipDirective_instances = new WeakSet(), _TooltipDirective_listenLeaveEvent = function _TooltipDirective_listenLeaveEvent() {
    __classPrivateFieldSet(this, _TooltipDirective_leaveEventHandler, this.rd2.listen(this.hostElementRef.nativeElement, 'mouseleave', () => {
        this.hide();
    }), "f");
}, _TooltipDirective_detach = function _TooltipDirective_detach() {
    if (__classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f")?.hasAttached()) {
        __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f").detach();
    }
}, _TooltipDirective_updateMessage = function _TooltipDirective_updateMessage() {
    if (__classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f")) {
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f").message = this.message;
    }
}, _TooltipDirective_updateTooltipClass = function _TooltipDirective_updateTooltipClass() {
    if (__classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f")) {
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f").updateTooltipClass(this.tooltipClass);
    }
}, _TooltipDirective_createOverlay = function _TooltipDirective_createOverlay() {
    return this.overlay.create({
        panelClass: `${CLASS_PREFIX}-${CLASS_TIP}-${CLASS_PANEL}`,
        positionStrategy: this.overlay.position().flexibleConnectedTo(this.hostElementRef).withPositions([
            {
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom',
                offsetY: -this.offset
            }
        ])
    });
}, _TooltipDirective_updatePosition = function _TooltipDirective_updatePosition() {
    const position = __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f").getConfig().positionStrategy;
    position.withPositions([__classPrivateFieldGet(this, _TooltipDirective_positionConfig, "f")[this.position]]);
};
TooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.Overlay }, { token: i0.ChangeDetectorRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
TooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.3", type: TooltipDirective, selector: "[xmTooltip]", inputs: { message: ["xmTooltip", "message"], offset: ["xmTooltipOffset", "offset"], tooltipClass: ["xmTooltipClass", "tooltipClass"], position: ["xmTooltipPosition", "position"], showDelay: ["xmTooltipShowDelay", "showDelay"], disabled: ["xmTooltipDisabled", "disabled"], hideDelay: ["xmTooltipHideDelay", "hideDelay"] }, exportAs: ["xmTooltip"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xmTooltip]',
                    exportAs: 'xmTooltip'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.Overlay }, { type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }]; }, propDecorators: { message: [{
                type: Input,
                args: ['xmTooltip']
            }], offset: [{
                type: Input,
                args: ['xmTooltipOffset']
            }], tooltipClass: [{
                type: Input,
                args: ['xmTooltipClass']
            }], position: [{
                type: Input,
                args: ['xmTooltipPosition']
            }], showDelay: [{
                type: Input,
                args: ['xmTooltipShowDelay']
            }], disabled: [{
                type: Input,
                args: ['xmTooltipDisabled']
            }], hideDelay: [{
                type: Input,
                args: ['xmTooltipHideDelay']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveG0tdWktbGlicy9zcmMvbGliL2RpcmVjdGl2ZXMvdG9vbHRpcC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULEtBQUssRUFLTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRTdDLE9BQU8sRUFBZSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBYyxNQUFNLHVCQUF1QixDQUFDOzs7QUFJN0csTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQztBQUNqQyxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ25DLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFRbkMsTUFBTSxPQUFPLGdCQUFnQjtJQWlFM0IsWUFDVyxjQUF1QyxFQUN2QyxHQUFjLEVBQ2QsT0FBZ0IsRUFDaEIsR0FBc0IsRUFDdEIsYUFBK0I7UUFKL0IsbUJBQWMsR0FBZCxjQUFjLENBQXlCO1FBQ3ZDLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjs7UUFyRXRCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDUCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1osaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDZixhQUFRLEdBQW9CLEtBQUssQ0FBQztRQUU5RCxzQ0FBYSxDQUFDLEVBQUM7UUFVZixxQ0FBWSxLQUFLLEVBQUM7UUFVVyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRTNDLCtDQUEyQztRQUMzQywyQ0FB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QkFBZ0I7Z0JBQ0ssUUFBUTtzQkFBbkMsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBSXRCLFNBQVM7c0JBRFosS0FBSzt1QkFBQyxvQkFBb0I7Z0JBV3ZCLFFBQVE7c0JBRFgsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBU0csU0FBUztzQkFBckMsS0FBSzt1QkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLCBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksIE92ZXJsYXksIE92ZXJsYXlSZWZ9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1Rvb2x0aXBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuaW1wb3J0IHtUeXBlV2l0aFVuZGVmaW5lZH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5LCBOdW1iZXJJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2VyY2lvblwiO1xuaW1wb3J0IHtDb25uZWN0ZWRQb3NpdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2Nkay9vdmVybGF5L3Bvc2l0aW9uL2ZsZXhpYmxlLWNvbm5lY3RlZC1wb3NpdGlvbi1zdHJhdGVneVwiO1xuXG5cbmV4cG9ydCBjb25zdCBDTEFTU19QUkVGSVggPSAneG0nO1xuZXhwb3J0IGNvbnN0IENMQVNTX1RJUCA9ICd0b29sdGlwJztcbmV4cG9ydCBjb25zdCBDTEFTU19QQU5FTCA9ICdwYW5lbCc7XG5cbnR5cGUgVG9vbHRpcFBvc2l0aW9uID0gJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t4bVRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICd4bVRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgneG1Ub29sdGlwJykgbWVzc2FnZSA9ICcnO1xuICBASW5wdXQoJ3htVG9vbHRpcE9mZnNldCcpIG9mZnNldCA9IDQ7XG4gIEBJbnB1dCgneG1Ub29sdGlwQ2xhc3MnKSB0b29sdGlwQ2xhc3MgPSAnJztcbiAgQElucHV0KCd4bVRvb2x0aXBQb3NpdGlvbicpIHBvc2l0aW9uOiBUb29sdGlwUG9zaXRpb24gPSAndG9wJztcblxuICAjc2hvd0RlbGF5ID0gMDtcbiAgQElucHV0KCd4bVRvb2x0aXBTaG93RGVsYXknKVxuICBzZXQgc2hvd0RlbGF5KHZhbHVlOiBOdW1iZXJJbnB1dCkge1xuICAgIHRoaXMuI3Nob3dEZWxheSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIGdldCBzaG93RGVsYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy4jc2hvd0RlbGF5O1xuICB9XG5cbiAgI2Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgneG1Ub29sdGlwRGlzYWJsZWQnKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IEJvb2xlYW5JbnB1dCkge1xuICAgIHRoaXMuI2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy4jZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoJ3htVG9vbHRpcEhpZGVEZWxheScpIGhpZGVEZWxheSA9IDA7XG5cbiAgI292ZXJsYXlSZWY6IFR5cGVXaXRoVW5kZWZpbmVkPE92ZXJsYXlSZWY+O1xuICAjcG9ydGFsOiBUeXBlV2l0aFVuZGVmaW5lZDxDb21wb25lbnRQb3J0YWw8VG9vbHRpcENvbXBvbmVudD4+O1xuICAjdG9vbHRpcEluc3RhbmNlOiBUeXBlV2l0aFVuZGVmaW5lZDxUb29sdGlwQ29tcG9uZW50PjtcblxuICAjZW50ZXJFdmVudEhhbmRsZXIgPSAoKSA9PiB7fTtcbiAgI2xlYXZlRXZlbnRIYW5kbGVyID0gKCkgPT4ge307XG5cbiAgI3Bvc2l0aW9uQ29uZmlnOiB7IFtrZXkgaW4gVG9vbHRpcFBvc2l0aW9uXTogQ29ubmVjdGVkUG9zaXRpb24gfSA9IHtcbiAgICB0b3A6IHtcbiAgICAgIG9yaWdpblg6ICdjZW50ZXInLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICBvdmVybGF5WDogJ2NlbnRlcicsXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbScsXG4gICAgICBvZmZzZXRZOiAtdGhpcy5vZmZzZXRcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgb3JpZ2luWDogJ2NlbnRlcicsXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnY2VudGVyJyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICAgIG9mZnNldFk6IHRoaXMub2Zmc2V0XG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWTogJ2NlbnRlcicsXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICBvdmVybGF5WTogJ2NlbnRlcicsXG4gICAgICBvZmZzZXRYOiAtdGhpcy5vZmZzZXRcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgIG9yaWdpblk6ICdjZW50ZXInLFxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICBvdmVybGF5WTogJ2NlbnRlcicsXG4gICAgICBvZmZzZXRYOiB0aGlzLm9mZnNldFxuICAgIH0sXG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgaG9zdEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHJlYWRvbmx5IHJkMjogUmVuZGVyZXIyLFxuICAgIHJlYWRvbmx5IG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZWFkb25seSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICApIHsgfVxuXG4gIG5nT25DaGFuZ2VzKHsgdG9vbHRpcENsYXNzLCBwb3NpdGlvbiB9OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRvb2x0aXBDbGFzcz8uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLiN1cGRhdGVUb29sdGlwQ2xhc3MoKTtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uICYmIHRoaXMuI292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuI3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmhvc3RFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuI2VudGVyRXZlbnRIYW5kbGVyID0gdGhpcy5yZDIubGlzdGVuKHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2xpc3RlbkxlYXZlRXZlbnQoKTtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gICNsaXN0ZW5MZWF2ZUV2ZW50KCkge1xuICAgIHRoaXMuI2xlYXZlRXZlbnRIYW5kbGVyID0gdGhpcy5yZDIubGlzdGVuKHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKCF0aGlzLiNvdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLiNvdmVybGF5UmVmID0gdGhpcy4jY3JlYXRlT3ZlcmxheSgpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuI3BvcnRhbCkge1xuICAgICAgdGhpcy4jcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChUb29sdGlwQ29tcG9uZW50LCB0aGlzLnZpZXdDb250YWluZXIpO1xuICAgIH1cbiAgICB0aGlzLiN0b29sdGlwSW5zdGFuY2UgPSB0aGlzLiNvdmVybGF5UmVmLmF0dGFjaCh0aGlzLiNwb3J0YWwpLmluc3RhbmNlO1xuICAgIHRoaXMuI3VwZGF0ZVRvb2x0aXBDbGFzcygpO1xuICAgIHRoaXMuI3VwZGF0ZU1lc3NhZ2UoKTtcbiAgICB0aGlzLiN1cGRhdGVQb3NpdGlvbigpO1xuICAgIHRoaXMuI3Rvb2x0aXBJbnN0YW5jZS5zaG93KHRoaXMuc2hvd0RlbGF5KTtcbiAgICB0aGlzLiN0b29sdGlwSW5zdGFuY2UuaGlkZVN1YmplY3QucGlwZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLiNkZXRhY2goKTtcbiAgICB9KVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLiN0b29sdGlwSW5zdGFuY2U/LmhpZGUodGhpcy5oaWRlRGVsYXkpO1xuICB9XG5cbiAgI2RldGFjaCgpIHtcbiAgICBpZiAodGhpcy4jb3ZlcmxheVJlZj8uaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy4jb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlTWVzc2FnZSgpIHtcbiAgICBpZiAodGhpcy4jdG9vbHRpcEluc3RhbmNlKSB7XG4gICAgICB0aGlzLiN0b29sdGlwSW5zdGFuY2UubWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcbiAgICB9XG4gIH1cbiAgI3VwZGF0ZVRvb2x0aXBDbGFzcygpIHtcbiAgICBpZiAodGhpcy4jdG9vbHRpcEluc3RhbmNlKSB7XG4gICAgICB0aGlzLiN0b29sdGlwSW5zdGFuY2UudXBkYXRlVG9vbHRpcENsYXNzKHRoaXMudG9vbHRpcENsYXNzKTtcbiAgICB9XG4gIH1cblxuICAjY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcbiAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBhbmVsQ2xhc3M6IGAke0NMQVNTX1BSRUZJWH0tJHtDTEFTU19USVB9LSR7Q0xBU1NfUEFORUx9YCxcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5ob3N0RWxlbWVudFJlZikud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnY2VudGVyJyxcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICBvdmVybGF5WDogJ2NlbnRlcicsXG4gICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nLFxuICAgICAgICAgIG9mZnNldFk6IC10aGlzLm9mZnNldFxuICAgICAgICB9XG4gICAgICBdKVxuICAgIH0pO1xuICB9XG5cbiAgI3VwZGF0ZVBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy4jb3ZlcmxheVJlZiEuZ2V0Q29uZmlnKCkucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gICAgcG9zaXRpb24ud2l0aFBvc2l0aW9ucyhbdGhpcy4jcG9zaXRpb25Db25maWdbdGhpcy5wb3NpdGlvbl1dKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKCdkaXJlY3RpdmUgZGVzdHJveScpO1xuICB9XG59XG4iXX0=