"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TooltipDirective_instances, _TooltipDirective_showDelay, _TooltipDirective_disabled, _TooltipDirective_overlayRef, _TooltipDirective_portal, _TooltipDirective_tooltipInstance, _TooltipDirective_enterEventHandler, _TooltipDirective_leaveEventHandler, _TooltipDirective_wheelEventHandler, _TooltipDirective_positionConfig, _TooltipDirective_listenWheelEvent, _TooltipDirective_listenLeaveEvent, _TooltipDirective_detach, _TooltipDirective_updateMessage, _TooltipDirective_updateTooltipClass, _TooltipDirective_createOverlay, _TooltipDirective_updatePosition;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipDirective = exports.CLASS_PANEL = exports.CLASS_TIP = exports.CLASS_PREFIX = void 0;
const core_1 = require("@angular/core");
const portal_1 = require("@angular/cdk/portal");
const component_1 = require("./component");
const coercion_1 = require("@angular/cdk/coercion");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const common_1 = require("@angular/common");
exports.CLASS_PREFIX = 'xm';
exports.CLASS_TIP = 'tooltip';
exports.CLASS_PANEL = 'panel';
let TooltipDirective = class TooltipDirective {
    constructor(hostElementRef, rd2, overlay, cdr, viewContainer, document) {
        this.hostElementRef = hostElementRef;
        this.rd2 = rd2;
        this.overlay = overlay;
        this.cdr = cdr;
        this.viewContainer = viewContainer;
        this.document = document;
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
        _TooltipDirective_tooltipInstance.set(this, null);
        _TooltipDirective_enterEventHandler.set(this, () => { });
        _TooltipDirective_leaveEventHandler.set(this, () => { });
        _TooltipDirective_wheelEventHandler.set(this, () => { });
        this.destroyed = new rxjs_1.Subject();
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
        __classPrivateFieldSet(this, _TooltipDirective_showDelay, (0, coercion_1.coerceNumberProperty)(value), "f");
    }
    get showDelay() {
        return __classPrivateFieldGet(this, _TooltipDirective_showDelay, "f");
    }
    set disabled(value) {
        __classPrivateFieldSet(this, _TooltipDirective_disabled, (0, coercion_1.coerceBooleanProperty)(value), "f");
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
                __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_listenWheelEvent).call(this);
                this.show();
            }), "f");
        }
    }
    show() {
        if (!__classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f")) {
            __classPrivateFieldSet(this, _TooltipDirective_overlayRef, __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_createOverlay).call(this), "f");
        }
        __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_detach).call(this);
        if (!__classPrivateFieldGet(this, _TooltipDirective_portal, "f")) {
            __classPrivateFieldSet(this, _TooltipDirective_portal, new portal_1.ComponentPortal(component_1.TooltipComponent, this.viewContainer), "f");
        }
        __classPrivateFieldSet(this, _TooltipDirective_tooltipInstance, __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f").attach(__classPrivateFieldGet(this, _TooltipDirective_portal, "f")).instance, "f");
        __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updateTooltipClass).call(this);
        __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updateMessage).call(this);
        __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_updatePosition).call(this);
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f").show(this.showDelay);
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f").afterHidden().pipe((0, operators_1.takeUntil)(this.destroyed)).subscribe(() => {
            __classPrivateFieldGet(this, _TooltipDirective_instances, "m", _TooltipDirective_detach).call(this);
        });
    }
    hide() {
        __classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f")?.hide(this.hideDelay);
    }
    ngOnDestroy() {
        if (__classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f")) {
            __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f").dispose();
            __classPrivateFieldSet(this, _TooltipDirective_tooltipInstance, null, "f");
        }
        __classPrivateFieldGet(this, _TooltipDirective_enterEventHandler, "f").call(this);
        __classPrivateFieldGet(this, _TooltipDirective_leaveEventHandler, "f").call(this);
        this.destroyed.next();
        this.destroyed.complete();
    }
};
_TooltipDirective_showDelay = new WeakMap(), _TooltipDirective_disabled = new WeakMap(), _TooltipDirective_overlayRef = new WeakMap(), _TooltipDirective_portal = new WeakMap(), _TooltipDirective_tooltipInstance = new WeakMap(), _TooltipDirective_enterEventHandler = new WeakMap(), _TooltipDirective_leaveEventHandler = new WeakMap(), _TooltipDirective_wheelEventHandler = new WeakMap(), _TooltipDirective_positionConfig = new WeakMap(), _TooltipDirective_instances = new WeakSet(), _TooltipDirective_listenWheelEvent = function _TooltipDirective_listenWheelEvent() {
    __classPrivateFieldSet(this, _TooltipDirective_wheelEventHandler, this.rd2.listen(this.hostElementRef.nativeElement, 'wheel', (event) => {
        if (__classPrivateFieldGet(this, _TooltipDirective_tooltipInstance, "f")?.visibility === 'visible') {
            // 鼠标所在的div
            const elementUnderPointer = this.document.elementFromPoint(event.clientX, event.clientY);
            const element = this.hostElementRef.nativeElement;
            if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
                this.hide();
            }
        }
    }), "f");
}, _TooltipDirective_listenLeaveEvent = function _TooltipDirective_listenLeaveEvent() {
    __classPrivateFieldSet(this, _TooltipDirective_leaveEventHandler, this.rd2.listen(this.hostElementRef.nativeElement, 'mouseleave', () => {
        this.hide();
    }), "f");
}, _TooltipDirective_detach = function _TooltipDirective_detach() {
    if (__classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f")?.hasAttached()) {
        __classPrivateFieldGet(this, _TooltipDirective_overlayRef, "f").detach();
    }
    __classPrivateFieldSet(this, _TooltipDirective_tooltipInstance, null, "f");
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
        panelClass: `${exports.CLASS_PREFIX}-${exports.CLASS_TIP}-${exports.CLASS_PANEL}`,
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
__decorate([
    (0, core_1.Input)('xmTooltip')
], TooltipDirective.prototype, "message", void 0);
__decorate([
    (0, core_1.Input)('xmTooltipOffset')
], TooltipDirective.prototype, "offset", void 0);
__decorate([
    (0, core_1.Input)('xmTooltipClass')
], TooltipDirective.prototype, "tooltipClass", void 0);
__decorate([
    (0, core_1.Input)('xmTooltipPosition')
], TooltipDirective.prototype, "position", void 0);
__decorate([
    (0, core_1.Input)('xmTooltipShowDelay')
], TooltipDirective.prototype, "showDelay", null);
__decorate([
    (0, core_1.Input)('xmTooltipDisabled')
], TooltipDirective.prototype, "disabled", null);
__decorate([
    (0, core_1.Input)('xmTooltipHideDelay')
], TooltipDirective.prototype, "hideDelay", void 0);
TooltipDirective = __decorate([
    (0, core_1.Directive)({
        selector: '[xmTooltip]',
        exportAs: 'xmTooltip'
    }),
    __param(5, (0, core_1.Inject)(common_1.DOCUMENT))
], TooltipDirective);
exports.TooltipDirective = TooltipDirective;
