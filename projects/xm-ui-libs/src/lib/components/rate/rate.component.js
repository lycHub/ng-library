"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RateComponent_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let RateComponent = RateComponent_1 = class RateComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.count = 5;
        this.readonly = false;
        this.starArray = [];
        this.hoverValue = 0;
        this.actualValue = 0;
        this.hasHalf = false;
        this.rateItemStyles = [];
        this.changed = new core_1.EventEmitter();
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
};
__decorate([
    (0, core_1.Input)()
], RateComponent.prototype, "count", void 0);
__decorate([
    (0, core_1.Input)()
], RateComponent.prototype, "tpl", void 0);
__decorate([
    (0, core_1.Output)()
], RateComponent.prototype, "changed", void 0);
RateComponent = RateComponent_1 = __decorate([
    (0, core_1.Component)({
        selector: 'xm-rate',
        templateUrl: './rate.component.html',
        styleUrls: ['./rate.component.scss'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: (0, core_1.forwardRef)(() => RateComponent_1),
                multi: true
            }
        ]
    })
], RateComponent);
exports.RateComponent = RateComponent;
