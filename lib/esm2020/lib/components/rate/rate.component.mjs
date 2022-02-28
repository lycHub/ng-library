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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94bS11aS1saWJzL3NyYy9saWIvY29tcG9uZW50cy9yYXRlL3JhdGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveG0tdWktbGlicy9zcmMvbGliL2NvbXBvbmVudHMvcmF0ZS9yYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBaUJ2RSxNQUFNLE9BQU8sYUFBYTtJQVV4QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVRqQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVgsYUFBUSxHQUFJLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBNEQvQyxhQUFRLEdBQTRCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUM3QyxjQUFTLEdBQWUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBNURhLENBQUM7SUFFL0MsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWUsRUFBRSxLQUFhO1FBQ3RDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxD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SUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBMkI7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7OzBHQXZGVSxhQUFhOzhGQUFiLGFBQWEsMkdBUmI7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUMsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLDBCQzFCSCw0U0FTQTsyRkRtQmEsYUFBYTtrQkFkekIsU0FBUzsrQkFDRSxTQUFTLG1CQUdGLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDOzRCQUM1QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjt3R0FHUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQU9JLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1R5cGVXaXRoVW5kZWZpbmVkfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4bS1yYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYXRlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhdGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSBjb3VudCA9IDU7XG4gIEBJbnB1dCgpIHRwbDogVHlwZVdpdGhVbmRlZmluZWQ8VGVtcGxhdGVSZWY8dm9pZD4+O1xuICBwcml2YXRlIHJlYWRvbmx5ICA9IGZhbHNlO1xuICBzdGFyQXJyYXk6IG51bWJlcltdID0gW107XG4gIHByaXZhdGUgaG92ZXJWYWx1ZSA9IDA7XG4gIHByaXZhdGUgYWN0dWFsVmFsdWUgPSAwO1xuICBwcml2YXRlIGhhc0hhbGYgPSBmYWxzZTtcbiAgcmF0ZUl0ZW1TdHlsZXM6IHN0cmluZ1tdID0gW107XG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTdGFyQXJyYXkoKTtcbiAgfVxuXG4gIHJhdGVIb3Zlcihpc0hhbGY6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWFkb25seSB8fCAodGhpcy5ob3ZlclZhbHVlID09PSBpbmRleCArIDEgJiYgaXNIYWxmID09PSB0aGlzLmhhc0hhbGYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGluZGV4ICsgMTtcbiAgICB0aGlzLmhhc0hhbGYgPSBpc0hhbGY7XG4gICAgLy8gY29uc29sZS5sb2coJ2hvdmVyVmFsdWUnLCB0aGlzLmhvdmVyVmFsdWUpO1xuICAgIHRoaXMudXBkYXRlU3RhclN0eWxlKCk7XG4gIH1cblxuICByYXRlQ2xpY2soaXNIYWxmOiBib29sZWFuLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVhZG9ubHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gaW5kZXggKyAxO1xuICAgIHRoaXMuaGFzSGFsZiA9IGlzSGFsZjtcbiAgICB0aGlzLnNldEFjdHVhbFZhbHVlKGlzSGFsZiA/IGluZGV4ICsgMC41IDogdGhpcy5ob3ZlclZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVN0YXJTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3R1YWxWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0dWFsVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLmFjdHVhbFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmF0ZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuaGFzSGFsZiA9ICFOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuYWN0dWFsVmFsdWUpO1xuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IE1hdGguY2VpbCh0aGlzLmFjdHVhbFZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVN0YXJTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdGFyQXJyYXkoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFyQXJyYXkgPSBBcnJheSh0aGlzLmNvdW50KS5maWxsKDApLm1hcCgoaXRlbSwgaW5kZXgpID0+IGluZGV4KTtcbiAgICAvLyBjb25zb2xlLmxvZygnc3RhckFycmF5JywgdGhpcy5zdGFyQXJyYXkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdGFyU3R5bGUoKTogdm9pZCB7XG4gICAgdGhpcy5yYXRlSXRlbVN0eWxlcyA9IHRoaXMuc3RhckFycmF5Lm1hcChpbmRleCA9PiB7XG4gICAgICBjb25zdCBiYXNlID0gJ3htLXJhdGUtaXRlbSc7XG4gICAgICBjb25zdCB2YWx1ZSA9IGluZGV4ICsgMTtcbiAgICAgIGxldCBjbHMgPSAnJztcbiAgICAgIGlmICh2YWx1ZSA8IHRoaXMuaG92ZXJWYWx1ZSB8fCAoIXRoaXMuaGFzSGFsZiAmJiB2YWx1ZSA9PT0gdGhpcy5ob3ZlclZhbHVlKSkge1xuICAgICAgICBjbHMgKz0gYmFzZSArICctZnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzSGFsZiAmJiB2YWx1ZSA9PT0gdGhpcy5ob3ZlclZhbHVlKSB7XG4gICAgICAgIGNscyArPSBiYXNlICsgJy1oYWxmJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1pZENscyA9IHRoaXMucmVhZG9ubHkgPyAnIHhtLXJhdGUtaXRlbS1yZWFkb25seSAnIDogJyAnO1xuICAgICAgcmV0dXJuIGJhc2UgKyBtaWRDbHMgKyBjbHM7XG4gICAgfSk7XG4gIH1cblxuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKCd3cml0ZVZhbHVlJywgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5hY3R1YWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5yYXRlTGVhdmUoKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZWFkb25seSA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ4bS1yYXRlLXdyYXBcIiAobW91c2VsZWF2ZSk9XCJyYXRlTGVhdmUoKVwiPlxuICA8eG0tcmF0ZS1pdGVtXG4gICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3RhckFycmF5OyBpbmRleCBhcyBpXCJcbiAgICBbdHBsXT1cInRwbFwiXG4gICAgW3JhdGVJdGVtQ2xzXT1cInJhdGVJdGVtU3R5bGVzW2ldXCJcbiAgICAoaXRlbUNsaWNrKT1cInJhdGVDbGljaygkZXZlbnQsIGkpXCJcbiAgICAoaXRlbUhvdmVyKT1cInJhdGVIb3ZlcigkZXZlbnQsIGkpXCI+XG4gIDwveG0tcmF0ZS1pdGVtPlxuPC9kaXY+XG4iXX0=