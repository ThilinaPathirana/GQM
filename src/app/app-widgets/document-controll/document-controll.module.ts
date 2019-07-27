import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { DocumentControllRoutingModule } from './document-controll-routing.module';
import { CommonDocumentTableComponent } from './common-document-table/common-document-table.component';
import { TopLevelManualsComponent } from './top-level-manuals/top-level-manuals.component';
import { DocumetControlLayoutComponent } from './documet-control-layout/documet-control-layout.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentControllRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [CommonDocumentTableComponent, TopLevelManualsComponent, DocumetControlLayoutComponent],
  exports: [
    CommonDocumentTableComponent,
  ]
})
export class DocumentControllModule { }
