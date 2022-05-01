"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconDirective = void 0;
const core_1 = require("@angular/core");
let IconDirective = class IconDirective {
    constructor(el, rd2) {
        this.el = el;
        this.rd2 = rd2;
    }
    ngOnChanges(changes) {
        const { type } = changes;
        // console.log('type change', type);
        if (type.previousValue) {
            this.rd2.removeClass(this.el.nativeElement, 'icon-' + type.previousValue);
        }
        this.rd2.addClass(this.el.nativeElement, 'icon-' + type.currentValue);
    }
};
__decorate([
    (0, core_1.Input)('xmIcon')
], IconDirective.prototype, "type", void 0);
IconDirective = __decorate([
    (0, core_1.Directive)({
        selector: 'i[xmIcon]',
        host: {
            '[class.iconfont]': 'true'
        }
    })
], IconDirective);
exports.IconDirective = IconDirective;
