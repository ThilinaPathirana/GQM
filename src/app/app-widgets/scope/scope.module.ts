import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScopeRoutingModule } from './scope-routing.module';
import { Mgts1Component } from './mgts1/mgts1.component';
import { Mgts1LayoutComponent } from './mgts1-layout/mgts1-layout.component';
import {AngularMaterialModule} from '../../app-modules/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    ScopeRoutingModule,
    AngularMaterialModule,
  ],
  declarations: [Mgts1Component, Mgts1LayoutComponent]
})
export class ScopeModule { }
