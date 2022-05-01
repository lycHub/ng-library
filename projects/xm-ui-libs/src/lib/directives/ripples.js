"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RipplesDirective = void 0;
const core_1 = require("@angular/core");
let RipplesDirective = class RipplesDirective {
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
};
__decorate([
    (0, core_1.HostBinding)('style.position')
], RipplesDirective.prototype, "position", void 0);
__decorate([
    (0, core_1.HostBinding)('style.overflow')
], RipplesDirective.prototype, "overflow", void 0);
__decorate([
    (0, core_1.HostListener)('click', ['$event'])
], RipplesDirective.prototype, "click", null);
RipplesDirective = __decorate([
    (0, core_1.Directive)({
        selector: '[xmRipples]'
    })
], RipplesDirective);
exports.RipplesDirective = RipplesDirective;
