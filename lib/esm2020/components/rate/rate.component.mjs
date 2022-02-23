import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./rate-item/rate-item.component";
import * as i2 from "@angular/common";
export class RateComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.count = 5;
        this.readonly = false;
        this.starArray = [];
        this.hoverValue = 0;
        this.actualValue = 0;
        this.hasHalf = false;
        this.rateItemStyles = [];
        this.changed = new EventEmitter();
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.updateStarArray();
    }
    rateHover(isHalf, index) {
        if (this.readonly || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
            return;
        }
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        // console.log('hoverValue', this.hoverValue);
        this.updateStarStyle();
    }
    rateClick(isHalf, index) {
        if (this.readonly) {
            return;
        }
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        this.setActualValue(isHalf ? index + 0.5 : this.hoverValue);
        this.updateStarStyle();
    }
    setActualValue(value) {
        if (this.actualValue !== value) {
            this.actualValue = value;
            this.onChange(value);
            this.changed.emit(value);
        }
    }
    rateLeave() {
        this.hasHalf = !Number.isInteger(this.actualValue);
        this.hoverValue = Math.ceil(this.actualValue);
        this.updateStarStyle();
    }
    updateStarArray() {
        this.starArray = Array(this.count).fill(0).map((item, index) => index);
        // console.log('starArray', this.starArray);
    }
    updateStarStyle() {
        this.rateItemStyles = this.starArray.map(index => {
            const base = 'xm-rate-item';
            const value = index + 1;
            let cls = '';
            if (value < this.hoverValue || (!this.hasHalf && value === this.hoverValue)) {
                cls += base + '-full';
            }
            else if (this.hasHalf && value === this.hoverValue) {
                cls += base + '-half';
            }
            const midCls = this.readonly ? ' xm-rate-item-readonly ' : ' ';
            return base + midCls + cls;
        });
    }
    writeValue(value) {
        // console.log('writeValue', value);
        if (value) {
            this.actualValue = value;
            this.rateLeave();
            this.cdr.markForCheck();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.readonly = isDisabled;
    }
}
RateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RateComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
RateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.3", type: RateComponent, selector: "xm-rate", inputs: { count: "count", tpl: "tpl" }, outputs: { changed: "changed" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RateComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"xm-rate-wrap\" (mouseleave)=\"rateLeave()\">\n  <xm-rate-item\n    *ngFor=\"let item of starArray; index as i\"\n    [tpl]=\"tpl\"\n    [rateItemCls]=\"rateItemStyles[i]\"\n    (itemClick)=\"rateClick($event, i)\"\n    (itemHover)=\"rateHover($event, i)\">\n  </xm-rate-item>\n</div>\n", styles: [".xm-rate-wrap xm-rate-item:last-child .xm-rate-item{margin-right:0}\n"], components: [{ type: i1.RateItemComponent, selector: "xm-rate-item", inputs: ["tpl", "rateItemCls"], outputs: ["itemHover", "itemClick"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'xm-rate', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RateComponent),
                            multi: true
                        }
                    ], template: "<div class=\"xm-rate-wrap\" (mouseleave)=\"rateLeave()\">\n  <xm-rate-item\n    *ngFor=\"let item of starArray; index as i\"\n    [tpl]=\"tpl\"\n    [rateItemCls]=\"rateItemStyles[i]\"\n    (itemClick)=\"rateClick($event, i)\"\n    (itemHover)=\"rateHover($event, i)\">\n  </xm-rate-item>\n</div>\n", styles: [".xm-rate-wrap xm-rate-item:last-child .xm-rate-item{margin-right:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { count: [{
                type: Input
            }], tpl: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy94bS11aS1saWJzL3NyYy9jb21wb25lbnRzL3JhdGUvcmF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy94bS11aS1saWJzL3NyYy9jb21wb25lbnRzL3JhdGUvcmF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFFTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWlCdkUsTUFBTSxPQUFPLGFBQWE7SUFVeEIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFUakMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUVYLGFBQVEsR0FBSSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUN4QixtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQTREL0MsYUFBUSxHQUE0QixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDN0MsY0FBUyxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQTVEYSxDQUFDO0lBRS9DLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFlLEVBQUUsS0FBYTtRQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMs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LEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUNELGdCQUFnQixDQUFDLEVBQTJCO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOzswR0F2RlUsYUFBYTs4RkFBYixhQUFhLDJHQVJiO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQzVDLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRiwwQkMxQkgsNFNBU0E7MkZEbUJhLGFBQWE7a0JBZHpCLFNBQVM7K0JBQ0UsU0FBUyxtQkFHRix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQzs0QkFDNUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7d0dBR1EsS0FBSztzQkFBYixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFPSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LCBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUeXBlV2l0aFVuZGVmaW5lZH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3htLXJhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhdGUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmF0ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBSYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIGNvdW50ID0gNTtcbiAgQElucHV0KCkgdHBsOiBUeXBlV2l0aFVuZGVmaW5lZDxUZW1wbGF0ZVJlZjx2b2lkPj47XG4gIHByaXZhdGUgcmVhZG9ubHkgID0gZmFsc2U7XG4gIHN0YXJBcnJheTogbnVtYmVyW10gPSBbXTtcbiAgcHJpdmF0ZSBob3ZlclZhbHVlID0gMDtcbiAgcHJpdmF0ZSBhY3R1YWxWYWx1ZSA9IDA7XG4gIHByaXZhdGUgaGFzSGFsZiA9IGZhbHNlO1xuICByYXRlSXRlbVN0eWxlczogc3RyaW5nW10gPSBbXTtcbiAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXJBcnJheSgpO1xuICB9XG5cbiAgcmF0ZUhvdmVyKGlzSGFsZjogYm9vbGVhbiwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlYWRvbmx5IHx8ICh0aGlzLmhvdmVyVmFsdWUgPT09IGluZGV4ICsgMSAmJiBpc0hhbGYgPT09IHRoaXMuaGFzSGFsZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gaW5kZXggKyAxO1xuICAgIHRoaXMuaGFzSGFsZiA9IGlzSGFsZjtcbiAgICAvLyBjb25zb2xlLmxvZygnaG92ZXJWYWx1ZScsIHRoaXMuaG92ZXJWYWx1ZSk7XG4gICAgdGhpcy51cGRhdGVTdGFyU3R5bGUoKTtcbiAgfVxuXG4gIHJhdGVDbGljayhpc0hhbGY6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWFkb25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBpbmRleCArIDE7XG4gICAgdGhpcy5oYXNIYWxmID0gaXNIYWxmO1xuICAgIHRoaXMuc2V0QWN0dWFsVmFsdWUoaXNIYWxmID8gaW5kZXggKyAwLjUgOiB0aGlzLmhvdmVyVmFsdWUpO1xuICAgIHRoaXMudXBkYXRlU3RhclN0eWxlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldEFjdHVhbFZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3R1YWxWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuYWN0dWFsVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByYXRlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNIYWxmID0gIU51bWJlci5pc0ludGVnZXIodGhpcy5hY3R1YWxWYWx1ZSk7XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gTWF0aC5jZWlsKHRoaXMuYWN0dWFsVmFsdWUpO1xuICAgIHRoaXMudXBkYXRlU3RhclN0eWxlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXJBcnJheSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJBcnJheSA9IEFycmF5KHRoaXMuY291bnQpLmZpbGwoMCkubWFwKChpdGVtLCBpbmRleCkgPT4gaW5kZXgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdzdGFyQXJyYXknLCB0aGlzLnN0YXJBcnJheSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXJTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJhdGVJdGVtU3R5bGVzID0gdGhpcy5zdGFyQXJyYXkubWFwKGluZGV4ID0+IHtcbiAgICAgIGNvbnN0IGJhc2UgPSAneG0tcmF0ZS1pdGVtJztcbiAgICAgIGNvbnN0IHZhbHVlID0gaW5kZXggKyAxO1xuICAgICAgbGV0IGNscyA9ICcnO1xuICAgICAgaWYgKHZhbHVlIDwgdGhpcy5ob3ZlclZhbHVlIHx8ICghdGhpcy5oYXNIYWxmICYmIHZhbHVlID09PSB0aGlzLmhvdmVyVmFsdWUpKSB7XG4gICAgICAgIGNscyArPSBiYXNlICsgJy1mdWxsJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNIYWxmICYmIHZhbHVlID09PSB0aGlzLmhvdmVyVmFsdWUpIHtcbiAgICAgICAgY2xzICs9IGJhc2UgKyAnLWhhbGYnO1xuICAgICAgfVxuICAgICAgY29uc3QgbWlkQ2xzID0gdGhpcy5yZWFkb25seSA/ICcgeG0tcmF0ZS1pdGVtLXJlYWRvbmx5ICcgOiAnICc7XG4gICAgICByZXR1cm4gYmFzZSArIG1pZENscyArIGNscztcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ3dyaXRlVmFsdWUnLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmFjdHVhbFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnJhdGVMZWF2ZSgpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlYWRvbmx5ID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInhtLXJhdGUtd3JhcFwiIChtb3VzZWxlYXZlKT1cInJhdGVMZWF2ZSgpXCI+XG4gIDx4bS1yYXRlLWl0ZW1cbiAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdGFyQXJyYXk7IGluZGV4IGFzIGlcIlxuICAgIFt0cGxdPVwidHBsXCJcbiAgICBbcmF0ZUl0ZW1DbHNdPVwicmF0ZUl0ZW1TdHlsZXNbaV1cIlxuICAgIChpdGVtQ2xpY2spPVwicmF0ZUNsaWNrKCRldmVudCwgaSlcIlxuICAgIChpdGVtSG92ZXIpPVwicmF0ZUhvdmVyKCRldmVudCwgaSlcIj5cbiAgPC94bS1yYXRlLWl0ZW0+XG48L2Rpdj5cbiJdfQ==