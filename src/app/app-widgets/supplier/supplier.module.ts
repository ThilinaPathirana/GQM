import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierFrontComponent } from './supplier-registration/supplier-front/supplier-front.component';
import { SupplierLayoutComponent } from './supplier-registration/supplier-layout/supplier-layout.component';
import { AngularMaterialModule } from 'src/app/app-modules/angular-material.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule,
    AngularMaterialModule,
    AgGridModule.withComponents([]),
    FormsModule,
    PerfectScrollbarModule,

  ],
  declarations: [SupplierFrontComponent, SupplierLayoutComponent]
})
export class SupplierModule { }
