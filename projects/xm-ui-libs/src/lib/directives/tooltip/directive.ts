import {
  AfterViewInit, ChangeDetectorRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges, ViewContainerRef
} from '@angular/core';
import {FlexibleConnectedPositionStrategy, Overlay, OverlayRef} from "@angular/cdk/overlay";
import { ComponentPortal } from '@angular/cdk/portal';
import {TooltipComponent} from "./component";
import {TypeWithUndefined} from "../../core";
import {BooleanInput, coerceBooleanProperty, coerceNumberProperty, NumberInput} from "@angular/cdk/coercion";
import {ConnectedPosition} from "@angular/cdk/overlay/position/flexible-connected-position-strategy";


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
  #tooltipInstance: TypeWithUndefined<TooltipComponent>;

  #enterEventHandler = () => {};
  #leaveEventHandler = () => {};

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
        this.show();
      });
    }

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
    if (!this.#portal) {
      this.#portal = new ComponentPortal(TooltipComponent, this.viewContainer);
    }
    this.#tooltipInstance = this.#overlayRef.attach(this.#portal).instance;
    this.#updateTooltipClass();
    this.#updateMessage();
    this.#updatePosition();
    this.#tooltipInstance.show(this.showDelay);
    this.#tooltipInstance.hideSubject.pipe().subscribe(() => {
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
    console.log('directive destroy');
  }
}
