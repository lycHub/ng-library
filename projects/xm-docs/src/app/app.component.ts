import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-root">
      <div class="demo-box">
        <a xmBtn xmRipples>{{ title }}</a>
      </div>
    </div>
  `,
  styles: [`
    .app-root {
      width: 300px;
      height: 200px;
      margin: 100px auto 0;
      border: 1px solid;
      overflow-y: auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'xm-docs';
}
