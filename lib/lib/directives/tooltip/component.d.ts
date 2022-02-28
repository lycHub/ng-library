import { AnimationEvent } from '@angular/animations';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
declare type TooltipState = 'initial' | 'visible' | 'hide';
export declare class TooltipComponent implements OnDestroy {
    #private;
    readonly cdr: ChangeDetectorRef;
    message: string;
    rootClass: string;
    visibility: TooltipState;
    readonly hideSubject: Subject<void>;
    constructor(cdr: ChangeDetectorRef);
    updateTooltipClass(value?: string): void;
    show(delay?: number): void;
    hide(delay?: number): void;
    animationDone(event: AnimationEvent): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipComponent, "xm-tooltip", never, {}, {}, never, never>;
}
export {};
