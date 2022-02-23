import { NgModule } from '@angular/core';
import { IconDirective } from './icon/icon.directive';
import {BtnDirective} from "./xm-btn.directive";
import {StrTplOutletDirective} from "./str-tpl-outlet.directive";

const list = [IconDirective, BtnDirective, StrTplOutletDirective];

@NgModule({
  declarations: list,
  exports: list
})
class DirectivesModule { }

export { IconDirective, BtnDirective, StrTplOutletDirective, DirectivesModule }
