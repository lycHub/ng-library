import {
  AfterViewInit, ChangeDetectorRef,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges, ViewContainerRef
} from '@angular/core';
import {FlexibleConnectedPositionStrategy, Overlay, OverlayRef} from "@angular/cdk/overlay";
import { ComponentPortal } from '@angular/cdk/portal';
import {TooltipComponent} from "./component";
import {TypeWithNull, TypeWithUndefined} from "../../core";
import {BooleanInput, coerceBooleanProperty, coerceNumberProperty, NumberInput} from "@angular/cdk/coercion";
import {ConnectedPosition} from "@angular/cdk/overlay/position/flexible-connected-position-strategy";
import { Subject } from 'rxjs';
import {takeUntil} from "rxjs/operators";
import { DOCUMENT } from '@angular/common';


export const CLASS_PREFIX = 'xm';
export const CLASS_TIP = 'tooltip';
export const CLASS_PANEL = 'panel';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

@Directive({
  selector: '[xmTooltip]',
  exportAs: 'xmTooltip'
})
export class TooltipDirective implements AfterViewInit, OnChanges, OnDestroy {
  @Input('xmTooltip') message = '';
  @Input('xmTooltipOffset') offset = 4;
  @Input('xmTooltipClass') tooltipClass = '';
  @Input('xmTooltipPosition') position: TooltipPosition = 'top';

  #showDelay = 0;
  @Input('xmTooltipShowDelay')
  set showDelay(value: NumberInput) {
    this.#showDelay = coerceNumberProperty(value);
  }

  get showDelay(): number {
    return this.#showDelay;
  }

  #disabled = false;
  @Input('xmTooltipDisabled')
  set disabled(value: BooleanInput) {
    this.#disabled = coerceBooleanProperty(value);
  }

  get disabled(): boolean {
    return this.#disabled;
  }

  @Input('xmTooltipHideDelay') hideDelay = 0;

  #overlayRef: TypeWithUndefined<OverlayRef>;
  #portal: TypeWithUndefined<ComponentPortal<TooltipComponent>>;
  #tooltipInstance: TypeWithNull<TooltipComponent> = null;

  #enterEventHandler = () => {};
  #leaveEventHandler = () => {};
  #wheelEventHandler = () => {};
  readonly destroyed = new Subject<void>();
  #positionConfig: { [key in TooltipPosition]: ConnectedPosition } = {
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
  }
  constructor(
    readonly hostElementRef: ElementRef<HTMLElement>,
    readonly rd2: Renderer2,
    readonly overlay: Overlay,
    readonly cdr: ChangeDetectorRef,
    readonly viewContainer: ViewContainerRef,
    @Inject(DOCUMENT) readonly document: Document,
  ) { }

  ngOnChanges({ tooltipClass, position }: SimpleChanges) {
    if (tooltipClass?.currentValue) {
      this.#updateTooltipClass();
    }
    if (position && this.#overlayRef) {
      this.#updatePosition();
    }
  }

  ngAfterViewInit() {
    if (!this.disabled && this.hostElementRef.nativeElement) {
      this.#enterEventHandler = this.rd2.listen(this.hostElementRef.nativeElement, 'mouseenter', () => {
        this.#listenLeaveEvent();
        this.#listenWheelEvent();
        this.show();
      });
    }
  }

  // 滚动时，判断鼠标所在的div, 如果不是宿主就hide
  #listenWheelEvent() {
    this.#wheelEventHandler = this.rd2.listen(this.hostElementRef.nativeElement, 'wheel', (event: WheelEvent) => {
      if (this.#tooltipInstance?.visibility === 'visible') {
        // 鼠标所在的div
        const elementUnderPointer = this.document.elementFromPoint(event.clientX, event.clientY);
        const element = this.hostElementRef.nativeElement;
        if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
          this.hide();
        }
      }
    });
  }

  #listenLeaveEvent() {
    this.#leaveEventHandler = this.rd2.listen(this.hostElementRef.nativeElement, 'mouseleave', () => {
      this.hide();
    });
  }

  show() {
    if (!this.#overlayRef) {
      this.#overlayRef = this.#createOverlay();
    }
    this.#detach();
    if (!this.#portal) {
      this.#portal = new ComponentPortal(TooltipComponent, this.viewContainer);
    }

    this.#tooltipInstance = this.#overlayRef.attach(this.#portal).instance;
    this.#updateTooltipClass();
    this.#updateMessage();
    this.#updatePosition();
    this.#tooltipInstance.show(this.showDelay);
    this.#tooltipInstance.afterHidden().pipe(takeUntil(this.destroyed)).subscribe(() => {
      this.#detach();
    })
  }

  hide() {
    this.#tooltipInstance?.hide(this.hideDelay);
  }

  #detach() {
    if (this.#overlayRef?.hasAttached()) {
      this.#overlayRef.detach();
    }
    this.#tooltipInstance = null;
  }

  #updateMessage() {
    if (this.#tooltipInstance) {
      this.#tooltipInstance.message = this.message;
    }
  }
  #updateTooltipClass() {
    if (this.#tooltipInstance) {
      this.#tooltipInstance.updateTooltipClass(this.tooltipClass);
    }
  }

  #createOverlay(): OverlayRef {
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
  }

  #updatePosition() {
    const position = this.#overlayRef!.getConfig().positionStrategy as FlexibleConnectedPositionStrategy;
    position.withPositions([this.#positionConfig[this.position]]);
  }

  ngOnDestroy() {
    if (this.#overlayRef) {
      this.#overlayRef.dispose();
      this.#tooltipInstance = null;
    }
    this.#enterEventHandler();
    this.#leaveEventHandler();

    this.destroyed.next();
    this.destroyed.complete();
  }
}
