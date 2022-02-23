import * as i0 from '@angular/core';
import { Component, NgModule, Directive, Input, EventEmitter, ChangeDetectionStrategy, Output, forwardRef, ViewEncapsulation, HostBinding, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TestComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TestComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TestComponent, selector: "xm-test", ngImport: i0, template: `
    <p>
      xm-ui-libs test works !!!!!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TestComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'xm-test',
                    template: `
    <p>
      xm-ui-libs test works !!!!!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class TestUiModule {
}
TestUiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TestUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TestUiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TestUiModule, declarations: [TestComponent], exports: [TestComponent] });
TestUiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TestUiModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TestUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TestComponent
                    ],
                    imports: [],
                    exports: [
                        TestComponent
                    ]
                }]
        }] });

class IconDirective {
    constructor(el, rd2) {
        this.el = el;
        this.rd2 = rd2;
    }
    ngOnChanges(changes) {
        const { type } = changes;
        // console.log('type change', type);
        if (type.previousValue) {
            this.rd2.removeClass(this.el.nativeElement, 'icon-' + type.previousValue);
        }
        this.rd2.addClass(this.el.nativeElement, 'icon-' + type.currentValue);
    }
}
IconDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: IconDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
IconDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.5", type: IconDirective, selector: "i[xmIcon]", inputs: { type: ["xmIcon", "type"] }, host: { properties: { "class.iconfont": "true" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: IconDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'i[xmIcon]',
                    host: {
                        '[class.iconfont]': 'true'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { type: [{
                type: Input,
                args: ['xmIcon']
            }] } });

class RateItemComponent {
    constructor() {
        this.rateItemCls = 'xm-rate-item';
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    ngOnInit() {
    }
    hoverRate(isHalf) {
        this.itemHover.emit(isHalf);
    }
    clickRate(isHalf) {
        this.itemClick.emit(isHalf);
    }
}
RateItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RateItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RateItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RateItemComponent, selector: "xm-rate-item", inputs: { tpl: "tpl", rateItemCls: "rateItemCls" }, outputs: { itemHover: "itemHover", itemClick: "itemClick" }, ngImport: i0, template: "<div [class]=\"rateItemCls || 'xm-rate-item'\">\n  <div class=\"star-wrap back\" (click)=\"clickRate(false)\" (mouseenter)=\"hoverRate(false)\">\n    <ng-template [ngTemplateOutlet]=\"tpl || defaultTpl\"></ng-template>\n  </div>\n  <div class=\"star-wrap front\" (click)=\"clickRate(true)\" (mouseenter)=\"hoverRate(true)\">\n    <ng-template [ngTemplateOutlet]=\"tpl || defaultTpl\"></ng-template>\n  </div>\n  <ng-template #defaultTpl>\n    <i class=\"icon\" xmIcon=\"Star\"></i>\n  </ng-template>\n</div>\n", styles: [".xm-rate-item{position:relative;display:inline-block;color:#f0f0f0;margin-right:2px;cursor:pointer;transition:transform .3s}.xm-rate-item.xm-rate-item-full .back{color:#fa8c16}.xm-rate-item.xm-rate-item-full .front{opacity:0}.xm-rate-item.xm-rate-item-half .front{opacity:1}.xm-rate-item:hover{transform:scale(1.2)}.xm-rate-item.xm-rate-item-readonly:hover{transform:scale(1)}.xm-rate-item .star-wrap{transition:color .3s,opacity .3s}.xm-rate-item .star-wrap .icon{font-size:22px}.xm-rate-item .front{position:absolute;top:0;left:0;opacity:0;width:50%;height:100%;overflow:hidden;color:#fa8c16}\n"], directives: [{ type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: IconDirective, selector: "i[xmIcon]", inputs: ["xmIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RateItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'xm-rate-item',
                    templateUrl: './rate-item.component.html',
                    styleUrls: ['./rate-item.component.scss'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tpl: [{
                type: Input
            }], rateItemCls: [{
                type: Input
            }], itemHover: [{
                type: Output
            }], itemClick: [{
                type: Output
            }] } });

class RateComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.count = 5;
        this.readonly = false;
        this.starArray = [];
        this.hoverValue = 0;
        this.actualValue = 0;
        this.hasHalf = false;
        this.rateItemStyles = [];
        this.changed = new EventEmitter();
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.updateStarArray();
    }
    rateHover(isHalf, index) {
        if (this.readonly || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
            return;
        }
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        // console.log('hoverValue', this.hoverValue);
        this.updateStarStyle();
    }
    rateClick(isHalf, index) {
        if (this.readonly) {
            return;
        }
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        this.setActualValue(isHalf ? index + 0.5 : this.hoverValue);
        this.updateStarStyle();
    }
    setActualValue(value) {
        if (this.actualValue !== value) {
            this.actualValue = value;
            this.onChange(value);
            this.changed.emit(value);
        }
    }
    rateLeave() {
        this.hasHalf = !Number.isInteger(this.actualValue);
        this.hoverValue = Math.ceil(this.actualValue);
        this.updateStarStyle();
    }
    updateStarArray() {
        this.starArray = Array(this.count).fill(0).map((item, index) => index);
        // console.log('starArray', this.starArray);
    }
    updateStarStyle() {
        this.rateItemStyles = this.starArray.map(index => {
            const base = 'xm-rate-item';
            const value = index + 1;
            let cls = '';
            if (value < this.hoverValue || (!this.hasHalf && value === this.hoverValue)) {
                cls += base + '-full';
            }
            else if (this.hasHalf && value === this.hoverValue) {
                cls += base + '-half';
            }
            const midCls = this.readonly ? ' xm-rate-item-readonly ' : ' ';
            return base + midCls + cls;
        });
    }
    writeValue(value) {
        // console.log('writeValue', value);
        if (value) {
            this.actualValue = value;
            this.rateLeave();
            this.cdr.markForCheck();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.readonly = isDisabled;
    }
}
RateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RateComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
RateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RateComponent, selector: "xm-rate", inputs: { count: "count", tpl: "tpl" }, outputs: { changed: "changed" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RateComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"xm-rate-wrap\" (mouseleave)=\"rateLeave()\">\n  <xm-rate-item\n    *ngFor=\"let item of starArray; index as i\"\n    [tpl]=\"tpl\"\n    [rateItemCls]=\"rateItemStyles[i]\"\n    (itemClick)=\"rateClick($event, i)\"\n    (itemHover)=\"rateHover($event, i)\">\n  </xm-rate-item>\n</div>\n", styles: [".xm-rate-wrap xm-rate-item:last-child .xm-rate-item{margin-right:0}\n"], components: [{ type: RateItemComponent, selector: "xm-rate-item", inputs: ["tpl", "rateItemCls"], outputs: ["itemHover", "itemClick"] }], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'xm-rate',
                    templateUrl: './rate.component.html',
                    styleUrls: ['./rate.component.scss'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RateComponent),
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { count: [{
                type: Input
            }], tpl: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class BtnDirective {
    constructor() {
        this.xmBlock = false;
        this.xmCircle = false;
    }
}
BtnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BtnDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BtnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.5", type: BtnDirective, selector: "a[xmBtn], button[xmBtn]", inputs: { xmBlock: "xmBlock", xmCircle: "xmCircle" }, host: { properties: { "class.xm-btn": "true", "class.xm-btn-block": "this.xmBlock", "class.xm-btn-circle": "this.xmCircle" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BtnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'a[xmBtn], button[xmBtn]',
                    host: {
                        '[class.xm-btn]': 'true'
                    }
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { xmBlock: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.xm-btn-block']
            }], xmCircle: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.xm-btn-circle']
            }] } });

class StrTplOutletDirective {
    constructor(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.xmStrTplOutlet = '';
    }
    ngOnChanges({ xmStrTplOutlet }) {
        if (xmStrTplOutlet) {
            this.viewContainer.clear();
            const template = (this.xmStrTplOutlet instanceof TemplateRef) ? this.xmStrTplOutlet : this.templateRef;
            this.viewContainer.createEmbeddedView(template, this.xmStrTplOutletContext);
        }
    }
}
StrTplOutletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StrTplOutletDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
StrTplOutletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.5", type: StrTplOutletDirective, selector: "[xmStrTplOutlet]", inputs: { xmStrTplOutlet: "xmStrTplOutlet", xmStrTplOutletContext: "xmStrTplOutletContext" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StrTplOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xmStrTplOutlet]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { xmStrTplOutlet: [{
                type: Input
            }], xmStrTplOutletContext: [{
                type: Input
            }] } });

const list = [IconDirective, BtnDirective, StrTplOutletDirective];
class DirectivesModule {
}
DirectivesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DirectivesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: DirectivesModule, declarations: [IconDirective, BtnDirective, StrTplOutletDirective], exports: [IconDirective, BtnDirective, StrTplOutletDirective] });
DirectivesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: DirectivesModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: list,
                    exports: list
                }]
        }] });

class RateModule {
}
RateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RateModule, declarations: [RateItemComponent, RateComponent], imports: [CommonModule,
        DirectivesModule], exports: [RateComponent] });
RateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RateModule, imports: [[
            CommonModule,
            DirectivesModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [RateItemComponent, RateComponent],
                    imports: [
                        CommonModule,
                        DirectivesModule
                    ],
                    exports: [RateComponent]
                }]
        }] });

/*
 * 库的入口文件
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BtnDirective, DirectivesModule, IconDirective, RateComponent, RateModule, StrTplOutletDirective, TestComponent, TestUiModule };
//# sourceMappingURL=xm-ui-libs.js.map
