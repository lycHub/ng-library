import {animate, keyframes, state, style, transition, trigger, AnimationEvent} from '@angular/animations';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {CLASS_PREFIX, CLASS_TIP} from "./directive";
import {Observable, Subject} from "rxjs";
import {TypeWithUndefined} from "../../core";

type TooltipState = 'initial' | 'visible' | 'hide';

@Component({
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
          style({ opacity: 0,  transform: 'scale(0)' }),
          style({ opacity: 0.5,  transform: 'scale(1.1)' }),
          style({ opacity: 1,  transform: 'scale(1)' }),
        ]))
      ]),
      transition('* => hide', [
        animate('.2s ease-out')
      ])
    ])
  ]
})
export class TooltipComponent implements OnDestroy {
  message = '';
  rootClass = '';

  visibility: TooltipState = 'initial';
  #showTimerId: TypeWithUndefined<number>;
  #hideTimerId: TypeWithUndefined<number>;

  readonly hideSubject = new Subject<void>();
  constructor(readonly cdr: ChangeDetectorRef) {
    this.updateTooltipClass();
  }

  updateTooltipClass(value = '') {
    this.rootClass = `${CLASS_PREFIX}-${CLASS_TIP} ${value}`;
  }

  show(delay = 0) {
    this.#clearTimer();
    this.#showTimerId = setTimeout(() => {
      this.visibility = 'visible';
      this.cdr.markForCheck();
    }, delay);
  }

  hide(delay = 0) {
    this.#clearTimer();
    this.#showTimerId = setTimeout(() => {
      this.visibility = 'hide';
      this.cdr.markForCheck();
    }, delay);
  }

  #clearTimer() {
    clearTimeout(this.#showTimerId);
    clearTimeout(this.#hideTimerId);
  }

  animationDone(event: AnimationEvent) {
    if (event.toState === 'hide') {
      this.hideSubject.next();
    }
  }

  afterHidden(): Observable<void> {
    return this.hideSubject.asObservable();
  }


  ngOnDestroy() {
    this.#clearTimer();
    this.hideSubject.complete();
  }
}
