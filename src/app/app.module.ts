import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './app-layouts/main/main.component';
import { BaseWidgetComponent } from './app-widgets/widget-utils/base-widget/base-widget.component';
import {HomePageWidgetsModule} from './app-widgets/home-page-widgets/home-page-widgets.module';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BaseWidgetComponent,

  ],
  imports: [
    BrowserModule,
    HomePageWidgetsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
