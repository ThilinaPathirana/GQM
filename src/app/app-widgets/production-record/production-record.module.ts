import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { ProductionRecordRoutingModule } from './production-record-routing.module';
import { ProductionRecordLayoutComponent } from './production-record-layout/production-record-layout.component';
import { CommonDocTableComponent } from './common-doc-table/common-doc-table.component';
import { ProductionRecordComponent } from './production-record/production-record.component';

@NgModule({
  imports: [
    CommonModule,
    ProductionRecordRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [ProductionRecordLayoutComponent, CommonDocTableComponent, ProductionRecordComponent]
  , exports: [
    CommonDocTableComponent,
  ]
})
export class ProductionRecordModule { }
