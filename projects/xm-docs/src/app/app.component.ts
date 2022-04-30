import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-root">
      <div class="demo-box">
        <a
          xmBtn
          xmRipples
          xmTooltip="top content !!!!"
          xmTooltipClass="my-tooltip-cls"
          [xmTooltipDisabled]="false"
          #xmTooltip="xmTooltip"
          xmTooltipPosition="left"
        >
          {{ title }}
        </a>
      </div>
    </div>

    <button (click)="xmTooltip.show()">show</button>
    <button (click)="xmTooltip.hide()">hide</button>
  `
,
  styles: [`
    .app-root {
      width: 300px;
      height: 200px;
      margin: 100px auto 0;
      border: 1px solid;
      overflow-y: auto;
    }
    .demo-box {
      height: 500px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'xm-docs';
}
