var _TooltipComponent_instances, _TooltipComponent_showTimerId, _TooltipComponent_hideTimerId, _TooltipComponent_clearTimer;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CLASS_PREFIX, CLASS_TIP } from "./directive";
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export class TooltipComponent {
    constructor(cdr) {
        this.cdr = cdr;
        _TooltipComponent_instances.add(this);
        this.message = '';
        this.rootClass = '';
        this.visibility = 'initial';
        _TooltipComponent_showTimerId.set(this, void 0);
        _TooltipComponent_hideTimerId.set(this, void 0);
        this.hideSubject = new Subject();
        this.updateTooltipClass();
    }
    updateTooltipClass(value = '') {
        this.rootClass = `${CLASS_PREFIX}-${CLASS_TIP} ${value}`;
    }
    show(delay = 0) {
        __classPrivateFieldGet(this, _TooltipComponent_instances, "m", _TooltipComponent_clearTimer).call(this);
        __classPrivateFieldSet(this, _TooltipComponent_showTimerId, setTimeout(() => {
            this.visibility = 'visible';
            this.cdr.markForCheck();
        }, delay), "f");
    }
    hide(delay = 0) {
        __classPrivateFieldGet(this, _TooltipComponent_instances, "m", _TooltipComponent_clearTimer).call(this);
        __classPrivateFieldSet(this, _TooltipComponent_showTimerId, setTimeout(() => {
            this.visibility = 'hide';
            this.cdr.markForCheck();
        }, delay), "f");
    }
    animationDone(event) {
        if (event.toState === 'hide') {
            this.hideSubject.next();
        }
    }
    ngOnDestroy() {
        __classPrivateFieldGet(this, _TooltipComponent_instances, "m", _TooltipComponent_clearTimer).call(this);
        this.hideSubject.complete();
    }
}
_TooltipComponent_showTimerId = new WeakMap(), _TooltipComponent_hideTimerId = new WeakMap(), _TooltipComponent_instances = new WeakSet(), _TooltipComponent_clearTimer = function _TooltipComponent_clearTimer() {
    clearTimeout(__classPrivateFieldGet(this, _TooltipComponent_showTimerId, "f"));
    clearTimeout(__classPrivateFieldGet(this, _TooltipComponent_hideTimerId, "f"));
};
TooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
TooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.3", type: TooltipComponent, selector: "xm-tooltip", ngImport: i0, template: `
    <div [class]="rootClass" [@tooltipAni]="visibility" (@tooltipAni.done)="animationDone($event)">
      {{ message }}
    </div>
  `, isInline: true, styles: [".xm-tooltip{padding:10px;background-color:#000;color:#fff;opacity:0;transform:scale(0)}\n"], animations: [
        trigger('tooltipAni', [
            state('visible', style({
                opacity: 1,
                transform: 'scale(1)',
            })),
            state('hide', style({
                opacity: 0,
                transform: 'scale(0)'
            })),
            transition('* => visible', [
                animate('.3s ease-in', keyframes([
                    style({ opacity: 0, transform: 'scale(0)' }),
                    style({ opacity: 0.5, transform: 'scale(1.1)' }),
                    style({ opacity: 1, transform: 'scale(1)' }),
                ]))
            ]),
            transition('* => hide', [
                animate('.2s ease-out')
            ])
        ])
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'xm-tooltip',
                    template: `
    <div [class]="rootClass" [@tooltipAni]="visibility" (@tooltipAni.done)="animationDone($event)">
      {{ message }}
    </div>
  `,
                    styles: [`
    .xm-tooltip {
      padding: 10px;
      background-color: #000;
      color: #fff;
      opacity: 0;
      transform: scale(0);
    }
  `],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('tooltipAni', [
                            state('visible', style({
                                opacity: 1,
                                transform: 'scale(1)',
                            })),
                            state('hide', style({
                                opacity: 0,
                                transform: 'scale(0)'
                            })),
                            transition('* => visible', [
                                animate('.3s ease-in', keyframes([
                                    style({ opacity: 0, transform: 'scale(0)' }),
                                    style({ opacity: 0.5, transform: 'scale(1.1)' }),
                                    style({ opacity: 1, transform: 'scale(1)' }),
                                ]))
                            ]),
                            transition('* => hide', [
                                animate('.2s ease-out')
                            ])
                        ])
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveG0tdWktbGlicy9zcmMvbGliL2RpcmVjdGl2ZXMvdG9vbHRpcC9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7QUFDMUcsT0FBTyxFQUFDLHVCQUF1QixFQUFxQixTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDcEQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUE2QzdCLE1BQU0sT0FBTyxnQkFBZ0I7SUFTM0IsWUFBcUIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7O1FBUjNDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsZUFBVSxHQUFpQixTQUFTLENBQUM7UUFDckMsZ0RBQXdDO1FBQ3hDLGdEQUF3QztRQUUvQixnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFekMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQUssR0FBRyxFQUFFO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxZQUFZLElBQUksU0FBUyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDWix1QkFBQSxJQUFJLGlFQUFZLE1BQWhCLElBQUksQ0FBYyxDQUFDO1FBQ25CLHVCQUFBLElBQUksaUNBQWdCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxDQUFD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RSxVQUFVLEVBQUUsQ0FBQztvQ0FDN0MsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRyxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUM7b0NBQ2pELEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUcsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO2lDQUM5QyxDQUFDLENBQUM7NkJBQ0osQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixPQUFPLENBQUMsY0FBYyxDQUFDOzZCQUN4QixDQUFDO3lCQUNILENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FuaW1hdGUsIGtleWZyYW1lcywgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBBbmltYXRpb25FdmVudH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDTEFTU19QUkVGSVgsIENMQVNTX1RJUH0gZnJvbSBcIi4vZGlyZWN0aXZlXCI7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1R5cGVXaXRoVW5kZWZpbmVkfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xuXG50eXBlIFRvb2x0aXBTdGF0ZSA9ICdpbml0aWFsJyB8ICd2aXNpYmxlJyB8ICdoaWRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneG0tdG9vbHRpcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbY2xhc3NdPVwicm9vdENsYXNzXCIgW0B0b29sdGlwQW5pXT1cInZpc2liaWxpdHlcIiAoQHRvb2x0aXBBbmkuZG9uZSk9XCJhbmltYXRpb25Eb25lKCRldmVudClcIj5cbiAgICAgIHt7IG1lc3NhZ2UgfX1cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC54bS10b29sdGlwIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gIGBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Rvb2x0aXBBbmknLCBbXG4gICAgICBzdGF0ZSgndmlzaWJsZScsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2hpZGUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2aXNpYmxlJywgW1xuICAgICAgICBhbmltYXRlKCcuM3MgZWFzZS1pbicsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCAgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMC41LCAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScgfSksXG4gICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxLCAgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pLFxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBoaWRlJywgW1xuICAgICAgICBhbmltYXRlKCcuMnMgZWFzZS1vdXQnKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBtZXNzYWdlID0gJyc7XG4gIHJvb3RDbGFzcyA9ICcnO1xuXG4gIHZpc2liaWxpdHk6IFRvb2x0aXBTdGF0ZSA9ICdpbml0aWFsJztcbiAgI3Nob3dUaW1lcklkOiBUeXBlV2l0aFVuZGVmaW5lZDxudW1iZXI+O1xuICAjaGlkZVRpbWVySWQ6IFR5cGVXaXRoVW5kZWZpbmVkPG51bWJlcj47XG5cbiAgcmVhZG9ubHkgaGlkZVN1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy51cGRhdGVUb29sdGlwQ2xhc3MoKTtcbiAgfVxuXG4gIHVwZGF0ZVRvb2x0aXBDbGFzcyh2YWx1ZSA9ICcnKSB7XG4gICAgdGhpcy5yb290Q2xhc3MgPSBgJHtDTEFTU19QUkVGSVh9LSR7Q0xBU1NfVElQfSAke3ZhbHVlfWA7XG4gIH1cblxuICBzaG93KGRlbGF5ID0gMCkge1xuICAgIHRoaXMuI2NsZWFyVGltZXIoKTtcbiAgICB0aGlzLiNzaG93VGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgZGVsYXkpO1xuICB9XG5cbiAgaGlkZShkZWxheSA9IDApIHtcbiAgICB0aGlzLiNjbGVhclRpbWVyKCk7XG4gICAgdGhpcy4jc2hvd1RpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICdoaWRlJztcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gICNjbGVhclRpbWVyKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLiNzaG93VGltZXJJZCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuI2hpZGVUaW1lcklkKTtcbiAgfVxuXG4gIGFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdoaWRlJykge1xuICAgICAgdGhpcy5oaWRlU3ViamVjdC5uZXh0KCk7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuI2NsZWFyVGltZXIoKTtcbiAgICB0aGlzLmhpZGVTdWJqZWN0LmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==