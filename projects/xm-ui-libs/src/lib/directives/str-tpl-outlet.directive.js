"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrTplOutletDirective = void 0;
const core_1 = require("@angular/core");
let StrTplOutletDirective = class StrTplOutletDirective {
    constructor(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.xmStrTplOutlet = '';
    }
    ngOnChanges({ xmStrTplOutlet }) {
        if (xmStrTplOutlet) {
            this.viewContainer.clear();
            const template = (this.xmStrTplOutlet instanceof core_1.TemplateRef) ? this.xmStrTplOutlet : this.templateRef;
            this.viewContainer.createEmbeddedView(template, this.xmStrTplOutletContext);
        }
    }
};
__decorate([
    (0, core_1.Input)()
], StrTplOutletDirective.prototype, "xmStrTplOutlet", void 0);
__decorate([
    (0, core_1.Input)()
], StrTplOutletDirective.prototype, "xmStrTplOutletContext", void 0);
StrTplOutletDirective = __decorate([
    (0, core_1.Directive)({
        selector: '[xmStrTplOutlet]'
    })
], StrTplOutletDirective);
exports.StrTplOutletDirective = StrTplOutletDirective;
