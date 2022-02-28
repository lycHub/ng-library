import { NgModule } from '@angular/core';
import { IconDirective } from './icon/icon.directive';
import { BtnDirective } from "./xm-btn.directive";
import { StrTplOutletDirective } from "./str-tpl-outlet.directive";
import { RipplesDirective } from "./ripples";
import { TooltipModule, TooltipDirective } from "./tooltip";
import * as i0 from "@angular/core";
const list = [IconDirective, BtnDirective, StrTplOutletDirective, RipplesDirective];
class DirectivesModule {
}
DirectivesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DirectivesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: DirectivesModule, declarations: [IconDirective, BtnDirective, StrTplOutletDirective, RipplesDirective], imports: [TooltipModule], exports: [IconDirective, BtnDirective, StrTplOutletDirective, RipplesDirective, TooltipModule] });
DirectivesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: DirectivesModule, imports: [[TooltipModule], TooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: list,
                    imports: [TooltipModule],
                    exports: [...list, TooltipModule]
                }]
        }] });
export { IconDirective, BtnDirective, StrTplOutletDirective, DirectivesModule, TooltipDirective, TooltipModule, RipplesDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy94bS11aS1saWJzL3NyYy9saWIvZGlyZWN0aXZlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7O0FBRTFELE1BQU0sSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXBGLE1BS00sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBUFIsYUFBYSxFQUFFLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsYUFJdEUsYUFBYSxhQUpYLGFBQWEsRUFBRSxZQUFZLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBSzdELGFBQWE7OEdBRTVCLGdCQUFnQixZQUhYLENBQUMsYUFBYSxDQUFDLEVBQ0wsYUFBYTsyRkFFNUIsZ0JBQWdCO2tCQUxyQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxJQUFJO29CQUNsQixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLGFBQWEsQ0FBQztpQkFDbEM7O0FBR0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi9pY29uL2ljb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHtCdG5EaXJlY3RpdmV9IGZyb20gXCIuL3htLWJ0bi5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtTdHJUcGxPdXRsZXREaXJlY3RpdmV9IGZyb20gXCIuL3N0ci10cGwtb3V0bGV0LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge1JpcHBsZXNEaXJlY3RpdmV9IGZyb20gXCIuL3JpcHBsZXNcIjtcclxuaW1wb3J0IHtUb29sdGlwTW9kdWxlLCBUb29sdGlwRGlyZWN0aXZlfSBmcm9tIFwiLi90b29sdGlwXCI7XHJcblxyXG5jb25zdCBsaXN0ID0gW0ljb25EaXJlY3RpdmUsIEJ0bkRpcmVjdGl2ZSwgU3RyVHBsT3V0bGV0RGlyZWN0aXZlLCBSaXBwbGVzRGlyZWN0aXZlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBsaXN0LFxyXG4gIGltcG9ydHM6IFtUb29sdGlwTW9kdWxlXSxcclxuICBleHBvcnRzOiBbLi4ubGlzdCwgVG9vbHRpcE1vZHVsZV1cclxufSlcclxuY2xhc3MgRGlyZWN0aXZlc01vZHVsZSB7IH1cclxuXHJcbmV4cG9ydCB7IEljb25EaXJlY3RpdmUsIEJ0bkRpcmVjdGl2ZSwgU3RyVHBsT3V0bGV0RGlyZWN0aXZlLCBEaXJlY3RpdmVzTW9kdWxlLCBUb29sdGlwRGlyZWN0aXZlLCBUb29sdGlwTW9kdWxlLCBSaXBwbGVzRGlyZWN0aXZlIH1cclxuIl19