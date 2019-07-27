import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import {FormsModule} from "@angular/forms";


import { ScopeRoutingModule } from './scope-routing.module';
import { Mgts1Component } from './mgts1/mgts1.component';
import { Mgts1LayoutComponent } from './mgts1-layout/mgts1-layout.component';
import {AngularMaterialModule} from '../../app-modules/angular-material.module';
import { ViewScopeComponent } from './view-scope/view-scope.component';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";

@NgModule({
  imports: [
    CommonModule,
    ScopeRoutingModule,
    AngularMaterialModule,
    AgGridModule.withComponents([]),
    FormsModule,
    PerfectScrollbarModule,

  ],
  declarations: [Mgts1Component, Mgts1LayoutComponent, ViewScopeComponent]
})
export class ScopeModule { }
