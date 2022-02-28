import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { IconType } from './type';
import { TypeWithUndefined } from "../../core";
import * as i0 from "@angular/core";
export declare class IconDirective implements OnChanges {
    private el;
    private rd2;
    type: TypeWithUndefined<IconType>;
    constructor(el: ElementRef, rd2: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IconDirective, "i[xmIcon]", never, { "type": "xmIcon"; }, {}, never>;
}
