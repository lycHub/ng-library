import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-root">
      <p class="text-3xl font-bold underline">dsa</p>
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
  styleUrls: ['app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'xm-docs';
}
