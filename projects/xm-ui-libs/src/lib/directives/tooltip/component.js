"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _TooltipComponent_instances, _TooltipComponent_showTimerId, _TooltipComponent_hideTimerId, _TooltipComponent_clearTimer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipComponent = void 0;
const animations_1 = require("@angular/animations");
const core_1 = require("@angular/core");
const directive_1 = require("./directive");
const rxjs_1 = require("rxjs");
let TooltipComponent = class TooltipComponent {
    constructor(cdr) {
        this.cdr = cdr;
        _TooltipComponent_instances.add(this);
        this.message = '';
        this.rootClass = '';
        this.visibility = 'initial';
        _TooltipComponent_showTimerId.set(this, void 0);
        _TooltipComponent_hideTimerId.set(this, void 0);
        this.hideSubject = new rxjs_1.Subject();
        this.updateTooltipClass();
    }
    updateTooltipClass(value = '') {
        this.rootClass = `${directive_1.CLASS_PREFIX}-${directive_1.CLASS_TIP} ${value}`;
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
    afterHidden() {
        return this.hideSubject.asObservable();
    }
    ngOnDestroy() {
        __classPrivateFieldGet(this, _TooltipComponent_instances, "m", _TooltipComponent_clearTimer).call(this);
        this.hideSubject.complete();
    }
};
_TooltipComponent_showTimerId = new WeakMap(), _TooltipComponent_hideTimerId = new WeakMap(), _TooltipComponent_instances = new WeakSet(), _TooltipComponent_clearTimer = function _TooltipComponent_clearTimer() {
    clearTimeout(__classPrivateFieldGet(this, _TooltipComponent_showTimerId, "f"));
    clearTimeout(__classPrivateFieldGet(this, _TooltipComponent_hideTimerId, "f"));
};
TooltipComponent = __decorate([
    (0, core_1.Component)({
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
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        animations: [
            (0, animations_1.trigger)('tooltipAni', [
                (0, animations_1.state)('visible', (0, animations_1.style)({
                    opacity: 1,
                    transform: 'scale(1)',
                })),
                (0, animations_1.state)('hide', (0, animations_1.style)({
                    opacity: 0,
                    transform: 'scale(0)'
                })),
                (0, animations_1.transition)('* => visible', [
                    (0, animations_1.animate)('.3s ease-in', (0, animations_1.keyframes)([
                        (0, animations_1.style)({ opacity: 0, transform: 'scale(0)' }),
                        (0, animations_1.style)({ opacity: 0.5, transform: 'scale(1.1)' }),
                        (0, animations_1.style)({ opacity: 1, transform: 'scale(1)' }),
                    ]))
                ]),
                (0, animations_1.transition)('* => hide', [
                    (0, animations_1.animate)('.2s ease-out')
                ])
            ])
        ]
    })
], TooltipComponent);
exports.TooltipComponent = TooltipComponent;
