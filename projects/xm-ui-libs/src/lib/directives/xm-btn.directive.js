"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtnDirective = void 0;
const core_1 = require("@angular/core");
let BtnDirective = class BtnDirective {
    constructor() {
        this.xmBlock = false;
        this.xmCircle = false;
    }
};
__decorate([
    (0, core_1.Input)(),
    (0, core_1.HostBinding)('class.xm-btn-block')
], BtnDirective.prototype, "xmBlock", void 0);
__decorate([
    (0, core_1.Input)(),
    (0, core_1.HostBinding)('class.xm-btn-circle')
], BtnDirective.prototype, "xmCircle", void 0);
BtnDirective = __decorate([
    (0, core_1.Directive)({
        selector: 'a[xmBtn], button[xmBtn]',
        host: {
            '[class.xm-btn]': 'true'
        }
    })
], BtnDirective);
exports.BtnDirective = BtnDirective;
