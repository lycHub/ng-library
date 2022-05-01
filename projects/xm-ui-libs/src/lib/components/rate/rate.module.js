"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const rate_item_component_1 = require("./rate-item/rate-item.component");
const directives_1 = require("../../directives");
const rate_component_1 = require("./rate.component");
let RateModule = class RateModule {
};
RateModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [rate_item_component_1.RateItemComponent, rate_component_1.RateComponent],
        imports: [
            common_1.CommonModule,
            directives_1.DirectivesModule
        ],
        exports: [rate_component_1.RateComponent]
    })
], RateModule);
exports.RateModule = RateModule;
