(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('xm-ui-libs', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["xm-ui-libs"] = {}, global.ng.core, global.ng.forms, global.ng.common));
})(this, (function (exports, i0, forms, i1) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
  var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

  var TestComponent = /** @class */ (function () {
      function TestComponent() {
      }
      TestComponent.prototype.ngOnInit = function () {
      };
      return TestComponent;
  }());
  TestComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TestComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  TestComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TestComponent, selector: "xm-test", ngImport: i0__namespace, template: "\n    <p>\n      xm-ui-libs test works !!!!!\n    </p>\n  ", isInline: true });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TestComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'xm-test',
                      template: "\n    <p>\n      xm-ui-libs test works !!!!!\n    </p>\n  ",
                      styles: []
                  }]
          }], ctorParameters: function () { return []; } });

  var TestUiModule = /** @class */ (function () {
      function TestUiModule() {
      }
      return TestUiModule;
  }());
  TestUiModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TestUiModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  TestUiModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TestUiModule, declarations: [TestComponent], exports: [TestComponent] });
  TestUiModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TestUiModule, imports: [[]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TestUiModule, decorators: [{
              type: i0.NgModule,
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

  var IconDirective = /** @class */ (function () {
      function IconDirective(el, rd2) {
          this.el = el;
          this.rd2 = rd2;
      }
      IconDirective.prototype.ngOnChanges = function (changes) {
          var type = changes.type;
          // console.log('type change', type);
          if (type.previousValue) {
              this.rd2.removeClass(this.el.nativeElement, 'icon-' + type.previousValue);
          }
          this.rd2.addClass(this.el.nativeElement, 'icon-' + type.currentValue);
      };
      return IconDirective;
  }());
  IconDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: IconDirective, deps: [{ token: i0__namespace.ElementRef }, { token: i0__namespace.Renderer2 }], target: i0__namespace.ɵɵFactoryTarget.Directive });
  IconDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.5", type: IconDirective, selector: "i[xmIcon]", inputs: { type: ["xmIcon", "type"] }, host: { properties: { "class.iconfont": "true" } }, usesOnChanges: true, ngImport: i0__namespace });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: IconDirective, decorators: [{
              type: i0.Directive,
              args: [{
                      selector: 'i[xmIcon]',
                      host: {
                          '[class.iconfont]': 'true'
                      }
                  }]
          }], ctorParameters: function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, propDecorators: { type: [{
                  type: i0.Input,
                  args: ['xmIcon']
              }] } });

  var RateItemComponent = /** @class */ (function () {
      function RateItemComponent() {
          this.rateItemCls = 'xm-rate-item';
          this.itemHover = new i0.EventEmitter();
          this.itemClick = new i0.EventEmitter();
      }
      RateItemComponent.prototype.ngOnInit = function () {
      };
      RateItemComponent.prototype.hoverRate = function (isHalf) {
          this.itemHover.emit(isHalf);
      };
      RateItemComponent.prototype.clickRate = function (isHalf) {
          this.itemClick.emit(isHalf);
      };
      return RateItemComponent;
  }());
  RateItemComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RateItemComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  RateItemComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RateItemComponent, selector: "xm-rate-item", inputs: { tpl: "tpl", rateItemCls: "rateItemCls" }, outputs: { itemHover: "itemHover", itemClick: "itemClick" }, ngImport: i0__namespace, template: "<div [class]=\"rateItemCls || 'xm-rate-item'\">\n  <div class=\"star-wrap back\" (click)=\"clickRate(false)\" (mouseenter)=\"hoverRate(false)\">\n    <ng-template [ngTemplateOutlet]=\"tpl || defaultTpl\"></ng-template>\n  </div>\n  <div class=\"star-wrap front\" (click)=\"clickRate(true)\" (mouseenter)=\"hoverRate(true)\">\n    <ng-template [ngTemplateOutlet]=\"tpl || defaultTpl\"></ng-template>\n  </div>\n  <ng-template #defaultTpl>\n    <i class=\"icon\" xmIcon=\"Star\"></i>\n  </ng-template>\n</div>\n", styles: [".xm-rate-item{position:relative;display:inline-block;color:#f0f0f0;margin-right:2px;cursor:pointer;transition:transform .3s}.xm-rate-item.xm-rate-item-full .back{color:#fa8c16}.xm-rate-item.xm-rate-item-full .front{opacity:0}.xm-rate-item.xm-rate-item-half .front{opacity:1}.xm-rate-item:hover{transform:scale(1.2)}.xm-rate-item.xm-rate-item-readonly:hover{transform:scale(1)}.xm-rate-item .star-wrap{transition:color .3s,opacity .3s}.xm-rate-item .star-wrap .icon{font-size:22px}.xm-rate-item .front{position:absolute;top:0;left:0;opacity:0;width:50%;height:100%;overflow:hidden;color:#fa8c16}\n"], directives: [{ type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: IconDirective, selector: "i[xmIcon]", inputs: ["xmIcon"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RateItemComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'xm-rate-item',
                      templateUrl: './rate-item.component.html',
                      styleUrls: ['./rate-item.component.scss'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { tpl: [{
                  type: i0.Input
              }], rateItemCls: [{
                  type: i0.Input
              }], itemHover: [{
                  type: i0.Output
              }], itemClick: [{
                  type: i0.Output
              }] } });

  var RateComponent = /** @class */ (function () {
      function RateComponent(cdr) {
          this.cdr = cdr;
          this.count = 5;
          this.readonly = false;
          this.starArray = [];
          this.hoverValue = 0;
          this.actualValue = 0;
          this.hasHalf = false;
          this.rateItemStyles = [];
          this.changed = new i0.EventEmitter();
          this.onChange = function () { };
          this.onTouched = function () { };
      }
      RateComponent.prototype.ngOnInit = function () {
          this.updateStarArray();
      };
      RateComponent.prototype.rateHover = function (isHalf, index) {
          if (this.readonly || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
              return;
          }
          this.hoverValue = index + 1;
          this.hasHalf = isHalf;
          // console.log('hoverValue', this.hoverValue);
          this.updateStarStyle();
      };
      RateComponent.prototype.rateClick = function (isHalf, index) {
          if (this.readonly) {
              return;
          }
          this.hoverValue = index + 1;
          this.hasHalf = isHalf;
          this.setActualValue(isHalf ? index + 0.5 : this.hoverValue);
          this.updateStarStyle();
      };
      RateComponent.prototype.setActualValue = function (value) {
          if (this.actualValue !== value) {
              this.actualValue = value;
              this.onChange(value);
              this.changed.emit(value);
          }
      };
      RateComponent.prototype.rateLeave = function () {
          this.hasHalf = !Number.isInteger(this.actualValue);
          this.hoverValue = Math.ceil(this.actualValue);
          this.updateStarStyle();
      };
      RateComponent.prototype.updateStarArray = function () {
          this.starArray = Array(this.count).fill(0).map(function (item, index) { return index; });
          // console.log('starArray', this.starArray);
      };
      RateComponent.prototype.updateStarStyle = function () {
          var _this = this;
          this.rateItemStyles = this.starArray.map(function (index) {
              var base = 'xm-rate-item';
              var value = index + 1;
              var cls = '';
              if (value < _this.hoverValue || (!_this.hasHalf && value === _this.hoverValue)) {
                  cls += base + '-full';
              }
              else if (_this.hasHalf && value === _this.hoverValue) {
                  cls += base + '-half';
              }
              var midCls = _this.readonly ? ' xm-rate-item-readonly ' : ' ';
              return base + midCls + cls;
          });
      };
      RateComponent.prototype.writeValue = function (value) {
          // console.log('writeValue', value);
          if (value) {
              this.actualValue = value;
              this.rateLeave();
              this.cdr.markForCheck();
          }
      };
      RateComponent.prototype.registerOnChange = function (fn) {
          this.onChange = fn;
      };
      RateComponent.prototype.registerOnTouched = function (fn) {
          this.onTouched = fn;
      };
      RateComponent.prototype.setDisabledState = function (isDisabled) {
          this.readonly = isDisabled;
      };
      return RateComponent;
  }());
  RateComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RateComponent, deps: [{ token: i0__namespace.ChangeDetectorRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
  RateComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RateComponent, selector: "xm-rate", inputs: { count: "count", tpl: "tpl" }, outputs: { changed: "changed" }, providers: [
          {
              provide: forms.NG_VALUE_ACCESSOR,
              useExisting: i0.forwardRef(function () { return RateComponent; }),
              multi: true
          }
      ], ngImport: i0__namespace, template: "<div class=\"xm-rate-wrap\" (mouseleave)=\"rateLeave()\">\n  <xm-rate-item\n    *ngFor=\"let item of starArray; index as i\"\n    [tpl]=\"tpl\"\n    [rateItemCls]=\"rateItemStyles[i]\"\n    (itemClick)=\"rateClick($event, i)\"\n    (itemHover)=\"rateHover($event, i)\">\n  </xm-rate-item>\n</div>\n", styles: [".xm-rate-wrap xm-rate-item:last-child .xm-rate-item{margin-right:0}\n"], components: [{ type: RateItemComponent, selector: "xm-rate-item", inputs: ["tpl", "rateItemCls"], outputs: ["itemHover", "itemClick"] }], directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush, encapsulation: i0__namespace.ViewEncapsulation.None });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RateComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'xm-rate',
                      templateUrl: './rate.component.html',
                      styleUrls: ['./rate.component.scss'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                      encapsulation: i0.ViewEncapsulation.None,
                      providers: [
                          {
                              provide: forms.NG_VALUE_ACCESSOR,
                              useExisting: i0.forwardRef(function () { return RateComponent; }),
                              multi: true
                          }
                      ]
                  }]
          }], ctorParameters: function () { return [{ type: i0__namespace.ChangeDetectorRef }]; }, propDecorators: { count: [{
                  type: i0.Input
              }], tpl: [{
                  type: i0.Input
              }], changed: [{
                  type: i0.Output
              }] } });

  var BtnDirective = /** @class */ (function () {
      function BtnDirective() {
          this.xmBlock = false;
          this.xmCircle = false;
      }
      return BtnDirective;
  }());
  BtnDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: BtnDirective, deps: [], target: i0__namespace.ɵɵFactoryTarget.Directive });
  BtnDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.5", type: BtnDirective, selector: "a[xmBtn], button[xmBtn]", inputs: { xmBlock: "xmBlock", xmCircle: "xmCircle" }, host: { properties: { "class.xm-btn": "true", "class.xm-btn-block": "this.xmBlock", "class.xm-btn-circle": "this.xmCircle" } }, ngImport: i0__namespace });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: BtnDirective, decorators: [{
              type: i0.Directive,
              args: [{
                      selector: 'a[xmBtn], button[xmBtn]',
                      host: {
                          '[class.xm-btn]': 'true'
                      }
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { xmBlock: [{
                  type: i0.Input
              }, {
                  type: i0.HostBinding,
                  args: ['class.xm-btn-block']
              }], xmCircle: [{
                  type: i0.Input
              }, {
                  type: i0.HostBinding,
                  args: ['class.xm-btn-circle']
              }] } });

  var StrTplOutletDirective = /** @class */ (function () {
      function StrTplOutletDirective(viewContainer, templateRef) {
          this.viewContainer = viewContainer;
          this.templateRef = templateRef;
          this.xmStrTplOutlet = '';
      }
      StrTplOutletDirective.prototype.ngOnChanges = function (_a) {
          var xmStrTplOutlet = _a.xmStrTplOutlet;
          if (xmStrTplOutlet) {
              this.viewContainer.clear();
              var template = (this.xmStrTplOutlet instanceof i0.TemplateRef) ? this.xmStrTplOutlet : this.templateRef;
              this.viewContainer.createEmbeddedView(template, this.xmStrTplOutletContext);
          }
      };
      return StrTplOutletDirective;
  }());
  StrTplOutletDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StrTplOutletDirective, deps: [{ token: i0__namespace.ViewContainerRef }, { token: i0__namespace.TemplateRef }], target: i0__namespace.ɵɵFactoryTarget.Directive });
  StrTplOutletDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.5", type: StrTplOutletDirective, selector: "[xmStrTplOutlet]", inputs: { xmStrTplOutlet: "xmStrTplOutlet", xmStrTplOutletContext: "xmStrTplOutletContext" }, usesOnChanges: true, ngImport: i0__namespace });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StrTplOutletDirective, decorators: [{
              type: i0.Directive,
              args: [{
                      selector: '[xmStrTplOutlet]'
                  }]
          }], ctorParameters: function () { return [{ type: i0__namespace.ViewContainerRef }, { type: i0__namespace.TemplateRef }]; }, propDecorators: { xmStrTplOutlet: [{
                  type: i0.Input
              }], xmStrTplOutletContext: [{
                  type: i0.Input
              }] } });

  var list = [IconDirective, BtnDirective, StrTplOutletDirective];
  var DirectivesModule = /** @class */ (function () {
      function DirectivesModule() {
      }
      return DirectivesModule;
  }());
  DirectivesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: DirectivesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: DirectivesModule, declarations: [IconDirective, BtnDirective, StrTplOutletDirective], exports: [IconDirective, BtnDirective, StrTplOutletDirective] });
  DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: DirectivesModule });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: list,
                      exports: list
                  }]
          }] });

  var RateModule = /** @class */ (function () {
      function RateModule() {
      }
      return RateModule;
  }());
  RateModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RateModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  RateModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RateModule, declarations: [RateItemComponent, RateComponent], imports: [i1.CommonModule,
          DirectivesModule], exports: [RateComponent] });
  RateModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RateModule, imports: [[
              i1.CommonModule,
              DirectivesModule
          ]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RateModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [RateItemComponent, RateComponent],
                      imports: [
                          i1.CommonModule,
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

  exports.BtnDirective = BtnDirective;
  exports.DirectivesModule = DirectivesModule;
  exports.IconDirective = IconDirective;
  exports.RateComponent = RateComponent;
  exports.RateModule = RateModule;
  exports.StrTplOutletDirective = StrTplOutletDirective;
  exports.TestComponent = TestComponent;
  exports.TestUiModule = TestUiModule;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=xm-ui-libs.umd.js.map
