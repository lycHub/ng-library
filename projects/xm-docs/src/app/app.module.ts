import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RateModule, TestUiModule, DirectivesModule} from "xm-ui-libs";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestUiModule,
    RateModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
