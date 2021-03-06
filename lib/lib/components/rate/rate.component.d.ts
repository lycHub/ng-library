import { ChangeDetectorRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TypeWithUndefined } from "../../core";
import * as i0 from "@angular/core";
export declare class RateComponent implements OnInit, ControlValueAccessor {
    private cdr;
    count: number;
    tpl: TypeWithUndefined<TemplateRef<void>>;
    private readonly;
    starArray: number[];
    private hoverValue;
    private actualValue;
    private hasHalf;
    rateItemStyles: string[];
    changed: EventEmitter<number>;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    rateHover(isHalf: boolean, index: number): void;
    rateClick(isHalf: boolean, index: number): void;
    private setActualValue;
    rateLeave(): void;
    private updateStarArray;
    private updateStarStyle;
    onChange: (value: number) => void;
    onTouched: () => void;
    writeValue(value: number): void;
    registerOnChange(fn: (value: number) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateComponent, "xm-rate", never, { "count": "count"; "tpl": "tpl"; }, { "changed": "changed"; }, never, never>;
}
