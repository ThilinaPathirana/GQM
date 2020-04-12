import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrnRoutingModule } from './grn-routing.module';
import { GrnLayoutComponent } from './grn-layout/grn-layout.component';
import { GrnFrontComponent } from './grn-front/grn-front.component';
import { AngularMaterialModule } from 'src/app/app-modules/angular-material.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    GrnRoutingModule,
    AngularMaterialModule,
    AgGridModule.withComponents([]),
    FormsModule,
    PerfectScrollbarModule,

  ],
  declarations: [GrnLayoutComponent, GrnFrontComponent]
})
export class GrnModule { }
