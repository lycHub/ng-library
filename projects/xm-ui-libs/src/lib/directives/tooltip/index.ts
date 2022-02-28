import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directive';
import {TooltipComponent} from "./component";



@NgModule({
  declarations: [
    TooltipDirective,
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TooltipDirective]
})
class TooltipModule {}

export { TooltipDirective, TooltipModule }
