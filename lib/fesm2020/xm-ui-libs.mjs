import * as i0 from '@angular/core';
import { Component, NgModule, Directive, Input, EventEmitter, ChangeDetectionStrategy, Output, forwardRef, ViewEncapsulation, HostBinding, TemplateRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { __classPrivateFieldGet, __classPrivateFieldSet } from 'tslib';
import { ComponentPortal } from '@angular/cdk/portal';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Subject } from 'rxjs';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i1$1 from '@angular/cdk/overlay';

class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TestComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TestComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.3", type: TestComponent, selector: "xm-test", ngImport: i0, template: `
    <p>
      xm-ui-libs test works !!!!!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TestComponent, decorators: [{
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
TestUiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TestUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TestUiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TestUiModule, declarations: [TestComponent], exports: [TestComponent] });
TestUiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TestUiModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TestUiModule, decorators: [{
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
IconDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: IconDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
IconDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.3", type: IconDirective, selector: "i[xmIcon]", inputs: { type: ["xmIcon", "type"] }, host: { properties: { "class.iconfont": "true" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: IconDirective, decorators: [{
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
RateItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RateItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RateItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.3", type: RateItemComponent, selector: "xm-rate-item", inputs: { tpl: "tpl", rateItemCls: "rateItemCls" }, outputs: { itemHover: "itemHover", itemClick: "itemClick" }, ngImport: i0, template: "<div [class]=\"rateItemCls || 'xm-rate-item'\">\n  <div class=\"star-wrap back\" (click)=\"clickRate(false)\" (mouseenter)=\"hoverRate(false)\">\n    <ng-template [ngTemplateOutlet]=\"tpl || defaultTpl\"></ng-template>\n  </div>\n  <div class=\"star-wrap front\" (click)=\"clickRate(true)\" (mouseenter)=\"hoverRate(true)\">\n    <ng-template [ngTemplateOutlet]=\"tpl || defaultTpl\"></ng-template>\n  </div>\n  <ng-template #defaultTpl>\n    <i class=\"icon\" xmIcon=\"Star\"></i>\n  </ng-template>\n</div>\n", styles: [".xm-rate-item{position:relative;display:inline-block;color:#f0f0f0;margin-right:2px;cursor:pointer;transition:transform .3s}.xm-rate-item.xm-rate-item-full .back{color:#fa8c16}.xm-rate-item.xm-rate-item-full .front{opacity:0}.xm-rate-item.xm-rate-item-half .front{opacity:1}.xm-rate-item:hover{transform:scale(1.2)}.xm-rate-item.xm-rate-item-readonly:hover{transform:scale(1)}.xm-rate-item .star-wrap{transition:color .3s,opacity .3s}.xm-rate-item .star-wrap .icon{font-size:22px}.xm-rate-item .front{position:absolute;top:0;left:0;opacity:0;width:50%;height:100%;overflow:hidden;color:#fa8c16}\n"], directives: [{ type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: IconDirective, selector: "i[xmIcon]", inputs: ["xmIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RateItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'xm-rate-item', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [class]=\"rateItemCls || 'xm-rate-item'\">\n  <div class=\"star-wrap back\" (click)=\"clickRate(false)\" (mouseenter)=\"hoverRate(false)\">\n    <ng-template [ngTemplateOutlet]=\"tpl || defaultTpl\"></ng-template>\n  </div>\n  <div class=\"star-wrap front\" (click)=\"clickRate(true)\" (mouseenter)=\"hoverRate(true)\">\n    <ng-template [ngTemplateOutlet]=\"tpl || defaultTpl\"></ng-template>\n  </div>\n  <ng-template #defaultTpl>\n    <i class=\"icon\" xmIcon=\"Star\"></i>\n  </ng-template>\n</div>\n", styles: [".xm-rate-item{position:relative;display:inline-block;color:#f0f0f0;margin-right:2px;cursor:pointer;transition:transform .3s}.xm-rate-item.xm-rate-item-full .back{color:#fa8c16}.xm-rate-item.xm-rate-item-full .front{opacity:0}.xm-rate-item.xm-rate-item-half .front{opacity:1}.xm-rate-item:hover{transform:scale(1.2)}.xm-rate-item.xm-rate-item-readonly:hover{transform:scale(1)}.xm-rate-item .star-wrap{transition:color .3s,opacity .3s}.xm-rate-item .star-wrap .icon{font-size:22px}.xm-rate-item .front{position:absolute;top:0;left:0;opacity:0;width:50%;height:100%;overflow:hidden;color:#fa8c16}\n"] }]
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
RateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RateComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
RateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.3", type: RateComponent, selector: "xm-rate", inputs: { count: "count", tpl: "tpl" }, outputs: { changed: "changed" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RateComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"xm-rate-wrap\" (mouseleave)=\"rateLeave()\">\n  <xm-rate-item\n    *ngFor=\"let item of starArray; index as i\"\n    [tpl]=\"tpl\"\n    [rateItemCls]=\"rateItemStyles[i]\"\n    (itemClick)=\"rateClick($event, i)\"\n    (itemHover)=\"rateHover($event, i)\">\n  </xm-rate-item>\n</div>\n", styles: [".xm-rate-wrap xm-rate-item:last-child .xm-rate-item{margin-right:0}\n"], components: [{ type: RateItemComponent, selector: "xm-rate-item", inputs: ["tpl", "rateItemCls"], outputs: ["itemHover", "itemClick"] }], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'xm-rate', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RateComponent),
                            multi: true
                        }
                    ], template: "<div class=\"xm-rate-wrap\" (mouseleave)=\"rateLeave()\">\n  <xm-rate-item\n    *ngFor=\"let item of starArray; index as i\"\n    [tpl]=\"tpl\"\n    [rateItemCls]=\"rateItemStyles[i]\"\n    (itemClick)=\"rateClick($event, i)\"\n    (itemHover)=\"rateHover($event, i)\">\n  </xm-rate-item>\n</div>\n", styles: [".xm-rate-wrap xm-rate-item:last-child .xm-rate-item{margin-right:0}\n"] }]
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
BtnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: BtnDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BtnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.3", type: BtnDirective, selector: "a[xmBtn], button[xmBtn]", inputs: { xmBlock: "xmBlock", xmCircle: "xmCircle" }, host: { properties: { "class.xm-btn": "true", "class.xm-btn-block": "this.xmBlock", "class.xm-btn-circle": "this.xmCircle" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: BtnDirective, decorators: [{
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
StrTplOutletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: StrTplOutletDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
StrTplOutletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.3", type: StrTplOutletDirective, selector: "[xmStrTplOutlet]", inputs: { xmStrTplOutlet: "xmStrTplOutlet", xmStrTplOutletContext: "xmStrTplOutletContext" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: StrTplOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xmStrTplOutlet]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { xmStrTplOutlet: [{
                type: Input
            }], xmStrTplOutletContext: [{
                type: Input
            }] } });

class RipplesDirective {
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
}
RipplesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RipplesDirective, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
RipplesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.3", type: RipplesDirective, selector: "[xmRipples]", host: { listeners: { "click": "click($event)" }, properties: { "style.position": "this.position", "style.overflow": "this.overflow" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RipplesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xmRipples]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { position: [{
                type: HostBinding,
                args: ['style.position']
            }], overflow: [{
                type: HostBinding,
                args: ['style.overflow']
            }], click: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

var _TooltipComponent_instances, _TooltipComponent_showTimerId, _TooltipComponent_hideTimerId, _TooltipComponent_clearTimer;
class TooltipComponent {
    constructor(cdr) {
        this.cdr = cdr;
        _TooltipComponent_instances.add(this);
        this.message = '';
        this.rootClass = '';
        this.visibility = 'initial';
        _TooltipComponent_showTimerId.set(this, void 0);
        _TooltipComponent_hideTimerId.set(this, void 0);
        this.hideSubject = new Subject();
        this.updateTooltipClass();
    }
    updateTooltipClass(value = '') {
        this.rootClass = `${CLASS_PREFIX}-${CLASS_TIP} ${value}`;
    }
    show(delay = 0) {
        __classPrivateFieldGet(this, _TooltipComponent_instances, "m", _TooltipComponent_clearTimer).call(this);
        __classPrivateFieldSet(this, _TooltipComponent_showTimerId, setTimeout(() => {
            this.visibility = 'visible';
            this.cdr.markForCheck();
        }, delay), "f");
    }
    hide(delay = 0) {
        __classPrivateFieldGet(this, _TooltipComponent_instances, "m", _TooltipComponent_clearTimer).call(this);
        __classPrivateFieldSet(this, _TooltipComponent_showTimerId, setTimeout(() => {
            this.visibility = 'hide';
            this.cdr.markForCheck();
        }, delay), "f");
    }
    animationDone(event) {
        if (event.toState === 'hide') {
            this.hideSubject.next();
        }
    }
    ngOnDestroy() {
        __classPrivateFieldGet(this, _TooltipComponent_instances, "m", _TooltipComponent_clearTimer).call(this);
        this.hideSubject.complete();
    }
}
_TooltipComponent_showTimerId = new WeakMap(), _TooltipComponent_hideTimerId = new WeakMap(), _TooltipComponent_instances = new WeakSet(), _TooltipComponent_clearTimer = function _TooltipComponent_clearTimer() {
    clearTimeout(__classPrivateFieldGet(this, _TooltipComponent_showTimerId, "f"));
    clearTimeout(__classPrivateFieldGet(this, _TooltipComponent_hideTimerId, "f"));
};
TooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
TooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.3", type: TooltipComponent, selector: "xm-tooltip", ngImport: i0, template: `
    <div [class]="rootClass" [@tooltipAni]="visibility" (@tooltipAni.done)="animationDone($event)">
      {{ message }}
    </div>
  `, isInline: true, styles: [".xm-tooltip{padding:10px;background-color:#000;color:#fff;opacity:0;transform:scale(0)}\n"], animations: [
        trigger('tooltipAni', [
            state('visible', style({
                opacity: 1,
                transform: 'scale(1)',
            })),
            state('hide', style({
                opacity: 0,
                transform: 'scale(0)'
            })),
            transition('* => visible', [
                animate('.3s ease-in', keyframes([
                    style({ opacity: 0, transform: 'scale(0)' }),
                    style({ opacity: 0.5, transform: 'scale(1.1)' }),
                    style({ opacity: 1, transform: 'scale(1)' }),
                ]))
            ]),
            transition('* => hide', [
                animate('.2s ease-out')
            ])
        ])
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'xm-tooltip',
                    template: `
    <div [class]="rootClass" [@tooltipAni]="visibility" (@tooltipAni.done)="animationDone($event)">
      {{ message }}
    </div>
  `,
                    styles: [`
    .xm-tooltip {
      padding: 10px;
      background-color: #000;
      color: #fff;
      opacity: 0;
      transform: scale(0);
    }
  `],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('tooltipAni', [
                            state('visible', style({
                                opacity: 1,
                                transform: 'scale(1)',
                            })),
                            state('hide', style({
                                opacity: 0,
                                transform: 'scale(0)'
                            })),
                            transition('* => visible', [
                                animate('.3s ease-in', keyframes([
                                    style({ opacity: 0, transform: 'scale(0)' }),
                                    style({ opacity: 0.5, transform: 'scale(1.1)' }),
                                    style({ opacity: 1, transform: 'scale(1)' }),
                                ]))
                            ]),
                            transition('* => hide', [
                                animate('.2s ease-out')
                            ])
                        ])
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; } });

var _TooltipDirective_instances, _TooltipDirective_showDelay, _TooltipDirective_disabled, _TooltipDirective_overlayRef, _TooltipDirective_portal, _TooltipDirective_tooltipInstance, _TooltipDirective_enterEventHandler, _TooltipDirective_leaveEventHandler, _TooltipDirective_positionConfig, _TooltipDirective_listenLeaveEvent, _TooltipDirective_detach, _TooltipDirective_updateMessage, _TooltipDirective_updateTooltipClass, _TooltipDirective_createOverlay, _TooltipDirective_updatePosition;
const CLASS_PREFIX = 'xm';
const CLASS_TIP = 'tooltip';
const CLASS_PANEL = 'panel';
class TooltipDirective {
    constructor(hostElementRef, rd2, overlay, cdr, viewContainer) {
        this.hostElementRef = hostElementRef;
        this.rd2 = rd2;
        this.overlay = overlay;
        this.cdr = cdr;
        this.viewContainer = viewContainer;
        _TooltipDirective_instances.add(this);
        this.message = '';
        this.offset = 4;
        this.tooltipClass = '';
        this.position = 'top';
        _TooltipDirective_showDelay.set(this, 0);
        _TooltipDirective_disabled.set(this, false);
        this.hideDelay = 0;
        _TooltipDirective_overlayRef.set(this, void 0);
        _TooltipDirective_portal.set(this, void 0);
        _TooltipDirective_tooltipInstance.set(this, void 0);
        _TooltipDirective_enterEventHandler.set(this, () => { });
        _TooltipDirective_leaveEventHandler.set(this, () => { });
        _TooltipDirective_positionConfig.set(this, {
            top: {
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom',
                offsetY: -this.offset
            },
            bottom: {
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top',
                offsetY: this.offset
            },
            left: {
                originX: 'start',
                originY: 'center',
                overlayX: 'end',
                overlayY: 'center',
                offsetX: -this.offset
            },
            right: {
                originX: 'end',
                originY: 'center',
                overlayX: 'start',
                overlayY: 'center',
                offsetX: this.offset
            },
        });
    }
    set showDelay(value) {
        __classPrivateFieldSet(this, _TooltipDirective_showDelay, coerceNumberProperty(value), "f");
    }
    get showDelay() {
        return __classPrivateFieldGet(this, _TooltipDirective_showDelay, "f");
    }
    set disabled(value) {
        __classPrivateFieldSet(this, _TooltipDirective_disabled, coerceBooleanProperty(value), "f");
    }
    get disabled() {
        return __classPrivateFieldGet(this, _TooltipDirective_disabled, "f");
    }
    ngOnChanges({ tooltipClass, position }) {
        if (tooltipClass?.currentValue) {
            __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updateTooltipClass).call(this);
        }
        if (position && __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f")) {
            __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updatePosition).call(this);
        }
    }
    ngAfterViewInit() {
        if (!this.disabled && this.hostElementRef.nativeElement) {
            __classPrivateFieldSet(this, _TooltipDirective_enterEventHandler, this.rd2.listen(this.hostElementRef.nativeElement, 'mouseenter', () => {
                __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_listenLeaveEvent).call(this);
                this.show();
            }), "f");
        }
    }
    show() {
        if (!__classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f")) {
            __classPrivateFieldSet(this, _TooltipDirective_overlayRef, __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_createOverlay).call(this), "f");
        }
        if (!__classPrivateFieldGet(this, _TooltipDirective_portal, "f")) {
            __classPrivateFieldSet(this, _TooltipDirective_portal, new ComponentPortal(TooltipComponent, this.viewContainer), "f");
        }
        __classPrivateFieldSet(this, _TooltipDirective_tooltipInstance, __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f").attach(__classPrivateFieldGet(this, _TooltipDirective_portal, "f")).instance, "f");
        __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updateTooltipClass).call(this);
        __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updateMessage).call(this);
        __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updatePosition).call(this);
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f").show(this.showDelay);
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f").hideSubject.pipe().subscribe(() => {
            __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_detach).call(this);
        });
    }
    hide() {
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f")?.hide(this.hideDelay);
    }
    ngOnDestroy() {
        console.log('directive destroy');
    }
}
_TooltipDirective_showDelay = new WeakMap(), _TooltipDirective_disabled = new WeakMap(), _TooltipDirective_overlayRef = new WeakMap(), _TooltipDirective_portal = new WeakMap(), _TooltipDirective_tooltipInstance = new WeakMap(), _TooltipDirective_enterEventHandler = new WeakMap(), _TooltipDirective_leaveEventHandler = new WeakMap(), _TooltipDirective_positionConfig = new WeakMap(), _TooltipDirective_instances = new WeakSet(), _TooltipDirective_listenLeaveEvent = function _TooltipDirective_listenLeaveEvent() {
    __classPrivateFieldSet(this, _TooltipDirective_leaveEventHandler, this.rd2.listen(this.hostElementRef.nativeElement, 'mouseleave', () => {
        this.hide();
    }), "f");
}, _TooltipDirective_detach = function _TooltipDirective_detach() {
    if (__classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f")?.hasAttached()) {
        __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f").detach();
    }
}, _TooltipDirective_updateMessage = function _TooltipDirective_updateMessage() {
    if (__classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f")) {
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f").message = this.message;
    }
}, _TooltipDirective_updateTooltipClass = function _TooltipDirective_updateTooltipClass() {
    if (__classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f")) {
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f").updateTooltipClass(this.tooltipClass);
    }
}, _TooltipDirective_createOverlay = function _TooltipDirective_createOverlay() {
    return this.overlay.create({
        panelClass: `${CLASS_PREFIX}-${CLASS_TIP}-${CLASS_PANEL}`,
        positionStrategy: this.overlay.position().flexibleConnectedTo(this.hostElementRef).withPositions([
            {
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom',
                offsetY: -this.offset
            }
        ])
    });
}, _TooltipDirective_updatePosition = function _TooltipDirective_updatePosition() {
    const position = __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f").getConfig().positionStrategy;
    position.withPositions([__classPrivateFieldGet(this, _TooltipDirective_positionConfig, "f")[this.position]]);
};
TooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1$1.Overlay }, { token: i0.ChangeDetectorRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
TooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.3", type: TooltipDirective, selector: "[xmTooltip]", inputs: { message: ["xmTooltip", "message"], offset: ["xmTooltipOffset", "offset"], tooltipClass: ["xmTooltipClass", "tooltipClass"], position: ["xmTooltipPosition", "position"], showDelay: ["xmTooltipShowDelay", "showDelay"], disabled: ["xmTooltipDisabled", "disabled"], hideDelay: ["xmTooltipHideDelay", "hideDelay"] }, exportAs: ["xmTooltip"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xmTooltip]',
                    exportAs: 'xmTooltip'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1$1.Overlay }, { type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }]; }, propDecorators: { message: [{
                type: Input,
                args: ['xmTooltip']
            }], offset: [{
                type: Input,
                args: ['xmTooltipOffset']
            }], tooltipClass: [{
                type: Input,
                args: ['xmTooltipClass']
            }], position: [{
                type: Input,
                args: ['xmTooltipPosition']
            }], showDelay: [{
                type: Input,
                args: ['xmTooltipShowDelay']
            }], disabled: [{
                type: Input,
                args: ['xmTooltipDisabled']
            }], hideDelay: [{
                type: Input,
                args: ['xmTooltipHideDelay']
            }] } });

class TooltipModule {
}
TooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipModule, declarations: [TooltipDirective,
        TooltipComponent], imports: [CommonModule], exports: [TooltipDirective] });
TooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: TooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TooltipDirective,
                        TooltipComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [TooltipDirective]
                }]
        }] });

const list = [IconDirective, BtnDirective, StrTplOutletDirective, RipplesDirective];
class DirectivesModule {
}
DirectivesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DirectivesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: DirectivesModule, declarations: [IconDirective, BtnDirective, StrTplOutletDirective, RipplesDirective], imports: [TooltipModule], exports: [IconDirective, BtnDirective, StrTplOutletDirective, RipplesDirective, TooltipModule] });
DirectivesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: DirectivesModule, imports: [[TooltipModule], TooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: list,
                    imports: [TooltipModule],
                    exports: [...list, TooltipModule]
                }]
        }] });

class RateModule {
}
RateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RateModule, declarations: [RateItemComponent, RateComponent], imports: [CommonModule,
        DirectivesModule], exports: [RateComponent] });
RateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RateModule, imports: [[
            CommonModule,
            DirectivesModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.3", ngImport: i0, type: RateModule, decorators: [{
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

export { BtnDirective, DirectivesModule, IconDirective, RateComponent, RateModule, RipplesDirective, StrTplOutletDirective, TestComponent, TestUiModule, TooltipDirective, TooltipModule };
//# sourceMappingURL=xm-ui-libs.mjs.map
