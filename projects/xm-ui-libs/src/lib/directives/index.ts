import { NgModule } from '@angular/core';
import { IconDirective } from './icon/icon.directive';
import {BtnDirective} from "./xm-btn.directive";
import {StrTplOutletDirective} from "./str-tpl-outlet.directive";
import {RipplesDirective} from "./ripples";
import {TooltipModule, TooltipDirective} from "./tooltip";

const list = [IconDirective, BtnDirective, StrTplOutletDirective, RipplesDirective];

@NgModule({
  declarations: list,
  imports: [TooltipModule],
  exports: [...list, TooltipModule]
})
class DirectivesModule { }

export { IconDirective, BtnDirective, StrTplOutletDirective, DirectivesModule, TooltipDirective, TooltipModule, RipplesDirective }
