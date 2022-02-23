import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../directives/icon/icon.directive";
export class RateItemComponent {
    constructor() {
        this.rateItemCls = 'xm-rate-item';
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    ngOnInit() {
    }
    hoverRate(isHalf) {
        this.itemHover.emit(isHalf);
    }
    clickRate(isHalf) {
        this.itemClick.emit(isHalf);
    }
}
RateItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RateItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RateItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RateItemComponent, selector: "xm-rate-item", inputs: { tpl: "tpl", rateItemCls: "rateItemCls" }, outputs: { itemHover: "itemHover", itemClick: "itemClick" }, ngImport: i0, template: "<div [class]=\"rateItemCls || 'xm-rate-item'\">\n  <div class=\"star-wrap back\" (click)=\"clickRate(false)\" (mouseenter)=\"hoverRate(false)\">\n    <ng-template [ngTemplateOutlet]=\"tpl || defaultTpl\"></ng-template>\n  </div>\n  <div class=\"star-wrap front\" (click)=\"clickRate(true)\" (mouseenter)=\"hoverRate(true)\">\n    <ng-template [ngTemplateOutlet]=\"tpl || defaultTpl\"></ng-template>\n  </div>\n  <ng-template #defaultTpl>\n    <i class=\"icon\" xmIcon=\"Star\"></i>\n  </ng-template>\n</div>\n", styles: [".xm-rate-item{position:relative;display:inline-block;color:#f0f0f0;margin-right:2px;cursor:pointer;transition:transform .3s}.xm-rate-item.xm-rate-item-full .back{color:#fa8c16}.xm-rate-item.xm-rate-item-full .front{opacity:0}.xm-rate-item.xm-rate-item-half .front{opacity:1}.xm-rate-item:hover{transform:scale(1.2)}.xm-rate-item.xm-rate-item-readonly:hover{transform:scale(1)}.xm-rate-item .star-wrap{transition:color .3s,opacity .3s}.xm-rate-item .star-wrap .icon{font-size:22px}.xm-rate-item .front{position:absolute;top:0;left:0;opacity:0;width:50%;height:100%;overflow:hidden;color:#fa8c16}\n"], directives: [{ type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i2.IconDirective, selector: "i[xmIcon]", inputs: ["xmIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RateItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'xm-rate-item',
                    templateUrl: './rate-item.component.html',
                    styleUrls: ['./rate-item.component.scss'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tpl: [{
                type: Input
            }], rateItemCls: [{
                type: Input
            }], itemHover: [{
                type: Output
            }], itemClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3htLXVpLWxpYnMvc3JjL2NvbXBvbmVudHMvcmF0ZS9yYXRlLWl0ZW0vcmF0ZS1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3htLXVpLWxpYnMvc3JjL2NvbXBvbmVudHMvcmF0ZS9yYXRlLWl0ZW0vcmF0ZS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWMsTUFBTSxlQUFlLENBQUM7Ozs7QUFTbkgsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QjtRQUhTLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBQzFDLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBZTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWU7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OEdBaEJVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHFLQ1Q5QiwrZkFXQTsyRkRGYSxpQkFBaUI7a0JBTjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7MEVBRVUsR0FBRztzQkFBWCxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ1ksU0FBUztzQkFBMUIsTUFBTTtnQkFDVyxTQUFTO3NCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUeXBlV2l0aFVuZGVmaW5lZH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3htLXJhdGUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRlLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYXRlLWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUmF0ZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0cGw6IFR5cGVXaXRoVW5kZWZpbmVkPFRlbXBsYXRlUmVmPHZvaWQ+PjtcbiAgQElucHV0KCkgcmF0ZUl0ZW1DbHMgPSAneG0tcmF0ZS1pdGVtJztcbiAgQE91dHB1dCgpIHByaXZhdGUgaXRlbUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBob3ZlclJhdGUoaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtSG92ZXIuZW1pdChpc0hhbGYpO1xuICB9XG5cbiAgY2xpY2tSYXRlKGlzSGFsZjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXRlbUNsaWNrLmVtaXQoaXNIYWxmKTtcbiAgfVxufVxuIiwiPGRpdiBbY2xhc3NdPVwicmF0ZUl0ZW1DbHMgfHwgJ3htLXJhdGUtaXRlbSdcIj5cbiAgPGRpdiBjbGFzcz1cInN0YXItd3JhcCBiYWNrXCIgKGNsaWNrKT1cImNsaWNrUmF0ZShmYWxzZSlcIiAobW91c2VlbnRlcik9XCJob3ZlclJhdGUoZmFsc2UpXCI+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbCB8fCBkZWZhdWx0VHBsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzdGFyLXdyYXAgZnJvbnRcIiAoY2xpY2spPVwiY2xpY2tSYXRlKHRydWUpXCIgKG1vdXNlZW50ZXIpPVwiaG92ZXJSYXRlKHRydWUpXCI+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbCB8fCBkZWZhdWx0VHBsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRwbD5cbiAgICA8aSBjbGFzcz1cImljb25cIiB4bUljb249XCJTdGFyXCI+PC9pPlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG4iXX0=