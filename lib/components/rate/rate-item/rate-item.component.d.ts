import { OnInit, TemplateRef } from '@angular/core';
import { TypeWithUndefined } from "../../../utils";
import * as i0 from "@angular/core";
export declare class RateItemComponent implements OnInit {
    tpl: TypeWithUndefined<TemplateRef<void>>;
    rateItemCls: string;
    private itemHover;
    private itemClick;
    constructor();
    ngOnInit(): void;
    hoverRate(isHalf: boolean): void;
    clickRate(isHalf: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateItemComponent, "xm-rate-item", never, { "tpl": "tpl"; "rateItemCls": "rateItemCls"; }, { "itemHover": "itemHover"; "itemClick": "itemClick"; }, never, never>;
}
