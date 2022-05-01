"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateItemComponent = void 0;
const core_1 = require("@angular/core");
let RateItemComponent = class RateItemComponent {
    constructor() {
        this.rateItemCls = 'xm-rate-item';
        this.itemHover = new core_1.EventEmitter();
        this.itemClick = new core_1.EventEmitter();
    }
    ngOnInit() {
    }
    hoverRate(isHalf) {
        this.itemHover.emit(isHalf);
    }
    clickRate(isHalf) {
        this.itemClick.emit(isHalf);
    }
};
__decorate([
    (0, core_1.Input)()
], RateItemComponent.prototype, "tpl", void 0);
__decorate([
    (0, core_1.Input)()
], RateItemComponent.prototype, "rateItemCls", void 0);
__decorate([
    (0, core_1.Output)()
], RateItemComponent.prototype, "itemHover", void 0);
__decorate([
    (0, core_1.Output)()
], RateItemComponent.prototype, "itemClick", void 0);
RateItemComponent = __decorate([
    (0, core_1.Component)({
        selector: 'xm-rate-item',
        templateUrl: './rate-item.component.html',
        styleUrls: ['./rate-item.component.scss'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], RateItemComponent);
exports.RateItemComponent = RateItemComponent;
