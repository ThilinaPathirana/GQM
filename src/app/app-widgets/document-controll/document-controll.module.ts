import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { DocumentControllRoutingModule } from './document-controll-routing.module';
import { CommonDocumentTableComponent } from './common-document-table/common-document-table.component';
import { TopLevelManualsComponent } from './top-level-manuals/top-level-manuals.component';
import { DocumetControlLayoutComponent } from './documet-control-layout/documet-control-layout.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {MatDialogModule} from "@angular/material";
import { WorkInstructionsComponent } from './work-instructions/work-instructions.component';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import { DocumentUploaderPopupComponent } from './document-uploader-popup/document-uploader-popup.component';
import {FormsModule} from "@angular/forms";
import {ContextMenuModule} from "ngx-contextmenu";
import { PopCommonDocTableComponent } from './pop-common-doc-table/pop-common-doc-table.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { ProductionRecordComponent } from './production-record/production-record.component';
import { AprovalPopupComponent } from './aproval-popup/aproval-popup.component';


@NgModule({
  imports: [
    CommonModule,
    DocumentControllRoutingModule,
    AgGridModule.withComponents([]),
    PdfViewerModule,
    MatDialogModule,
    PerfectScrollbarModule,
    FormsModule,
    ContextMenuModule

  ],
  declarations: [CommonDocumentTableComponent, TopLevelManualsComponent, DocumetControlLayoutComponent, PdfViewerComponent, WorkInstructionsComponent,
    DocumentUploaderPopupComponent, ProceduresComponent, ProductionRecordComponent, PopCommonDocTableComponent],
  exports: [
    CommonDocumentTableComponent,
    PdfViewerComponent,
    WorkInstructionsComponent,
  ],
  entryComponents: [PdfViewerComponent, DocumentUploaderPopupComponent, PopCommonDocTableComponent, AprovalPopupComponent],
  providers: [PdfViewerComponent, PopCommonDocTableComponent]

})
export class DocumentControllModule { }
