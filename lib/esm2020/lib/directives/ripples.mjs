import { Directive, HostBinding, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class RipplesDirective {
    constructor(rd2) {
        this.rd2 = rd2;
        this.position = 'relative';
        this.overflow = 'hidden';
    }
    click(event) {
        const target = event.target;
        const { left, top } = target.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        const ripple = this.rd2.createElement('span');
        this.rd2.addClass(ripple, 'xm-ripples');
        this.rd2.setStyle(ripple, 'left', x + 'px');
        this.rd2.setStyle(ripple, 'top', y + 'px');
        this.rd2.appendChild(target, ripple);
        this.rd2.listen(ripple, 'animationend', () => {
            this.rd2.removeChild(target, ripple);
        });
    }
}
RipplesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RipplesDirective, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
RipplesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.3", type: RipplesDirective, selector: "[xmRipples]", host: { listeners: { "click": "click($event)" }, properties: { "style.position": "this.position", "style.overflow": "this.overflow" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RipplesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xmRipples]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { position: [{
                type: HostBinding,
                args: ['style.position']
            }], overflow: [{
                type: HostBinding,
                args: ['style.overflow']
            }], click: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3htLXVpLWxpYnMvc3JjL2xpYi9kaXJlY3RpdmVzL3JpcHBsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDOztBQUs5RSxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW9CLEdBQWM7UUFBZCxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ00sYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixhQUFRLEdBQUcsUUFBUSxDQUFDO0lBRnRCLENBQUM7SUFJdkMsS0FBSyxDQUFDLEtBQWlCO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFxQixDQUFDO1FBQzNDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDckQsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0IsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs2R0FsQlUsZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFINUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Z0dBR3lDLFFBQVE7c0JBQS9DLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQUNXLFFBQVE7c0JBQS9DLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQUU3QixLQUFLO3NCQURKLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t4bVJpcHBsZXNdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmlwcGxlc0RpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZDI6IFJlbmRlcmVyMikgeyB9XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wb3NpdGlvbicpIHJlYWRvbmx5IHBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm92ZXJmbG93JykgcmVhZG9ubHkgb3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgY2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGxlZnQ7XHJcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHRvcDtcclxuICAgIGNvbnN0IHJpcHBsZSA9IHRoaXMucmQyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRoaXMucmQyLmFkZENsYXNzKHJpcHBsZSwgJ3htLXJpcHBsZXMnKTtcclxuICAgIHRoaXMucmQyLnNldFN0eWxlKHJpcHBsZSwgJ2xlZnQnLCB4ICsgJ3B4Jyk7XHJcbiAgICB0aGlzLnJkMi5zZXRTdHlsZShyaXBwbGUsICd0b3AnLCB5ICsgJ3B4Jyk7XHJcbiAgICB0aGlzLnJkMi5hcHBlbmRDaGlsZCh0YXJnZXQsIHJpcHBsZSk7XHJcbiAgICB0aGlzLnJkMi5saXN0ZW4ocmlwcGxlLCAnYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnJkMi5yZW1vdmVDaGlsZCh0YXJnZXQsIHJpcHBsZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19