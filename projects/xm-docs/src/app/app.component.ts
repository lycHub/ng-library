import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-root">
      root
      <xm-test></xm-test>
      <xm-rate></xm-rate>
    </div>
    
    <a xmBtn>click</a>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'xm-docs';
}
