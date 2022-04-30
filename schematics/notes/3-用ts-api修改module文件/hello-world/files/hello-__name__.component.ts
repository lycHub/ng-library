import { Component, Input } from '@angular/core';



// strings 中的方法
@Component({
  selector: 'hello-<%= selectorName %>',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class Hello<%= componentFragmentName %>Component  {
@Input() name = '';
}
