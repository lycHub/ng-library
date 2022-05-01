"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RipplesDirective = exports.TooltipModule = exports.TooltipDirective = exports.DirectivesModule = exports.StrTplOutletDirective = exports.BtnDirective = exports.IconDirective = void 0;
const core_1 = require("@angular/core");
const icon_directive_1 = require("./icon/icon.directive");
Object.defineProperty(exports, "IconDirective", { enumerable: true, get: function () { return icon_directive_1.IconDirective; } });
const xm_btn_directive_1 = require("./xm-btn.directive");
Object.defineProperty(exports, "BtnDirective", { enumerable: true, get: function () { return xm_btn_directive_1.BtnDirective; } });
const str_tpl_outlet_directive_1 = require("./str-tpl-outlet.directive");
Object.defineProperty(exports, "StrTplOutletDirective", { enumerable: true, get: function () { return str_tpl_outlet_directive_1.StrTplOutletDirective; } });
const ripples_1 = require("./ripples");
Object.defineProperty(exports, "RipplesDirective", { enumerable: true, get: function () { return ripples_1.RipplesDirective; } });
const tooltip_1 = require("./tooltip");
Object.defineProperty(exports, "TooltipModule", { enumerable: true, get: function () { return tooltip_1.TooltipModule; } });
Object.defineProperty(exports, "TooltipDirective", { enumerable: true, get: function () { return tooltip_1.TooltipDirective; } });
const list = [icon_directive_1.IconDirective, xm_btn_directive_1.BtnDirective, str_tpl_outlet_directive_1.StrTplOutletDirective, ripples_1.RipplesDirective];
let DirectivesModule = class DirectivesModule {
};
DirectivesModule = __decorate([
    (0, core_1.NgModule)({
        declarations: list,
        imports: [tooltip_1.TooltipModule],
        exports: [...list, tooltip_1.TooltipModule]
    })
], DirectivesModule);
exports.DirectivesModule = DirectivesModule;
