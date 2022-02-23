import { OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { TypeWithUndefined } from "../utils";
import * as i0 from "@angular/core";
export declare class StrTplOutletDirective<T> implements OnChanges {
    private viewContainer;
    private templateRef;
    xmStrTplOutlet: TemplateRef<T> | string;
    xmStrTplOutletContext: TypeWithUndefined<T>;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<T>);
    ngOnChanges({ xmStrTplOutlet }: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StrTplOutletDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StrTplOutletDirective<any>, "[xmStrTplOutlet]", never, { "xmStrTplOutlet": "xmStrTplOutlet"; "xmStrTplOutletContext": "xmStrTplOutletContext"; }, {}, never>;
}
