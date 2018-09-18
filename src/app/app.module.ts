import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './app-layouts/main/main.component';
import { BaseWidgetComponent } from './app-widgets/widget-utils/base-widget/base-widget.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './app-modules/angular-material.module';
import {AppLayoutsModule} from './app-layouts/app-layouts.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BaseWidgetComponent,

  ],
  imports: [
    BrowserModule,
    AppLayoutsModule,
    AppRoutingModule,
    AngularMaterialModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
