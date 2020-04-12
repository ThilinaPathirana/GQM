import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GonRoutingModule } from './gon-routing.module';
import { GonFrontComponent } from './gon-front/gon-front.component';
import { GonLayoutComponent } from './gon-layout/gon-layout.component';
import { AngularMaterialModule } from 'src/app/app-modules/angular-material.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    GonRoutingModule,
    AngularMaterialModule,
    AgGridModule.withComponents([]),
    FormsModule,
    PerfectScrollbarModule,

  ],
  declarations: [GonFrontComponent, GonLayoutComponent]
})
export class GonModule { }
