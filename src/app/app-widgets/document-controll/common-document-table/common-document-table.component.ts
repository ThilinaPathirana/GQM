import { Component, ElementRef, Injector, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DocumentControlType } from '../../../app-constants/enums/document-control-type.enum';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';
import { TrainingChartComponent } from '../../training/training-chart/training-chart.component';
import { Overlay, OverlayRef, ScrollStrategy } from '@angular/cdk/overlay';
import { DocumentUploaderPopupComponent } from '../document-uploader-popup/document-uploader-popup.component';
import { TemplatePortal } from '@angular/cdk/portal';
import { fromEvent, Subscription } from 'rxjs';
import { ContextMenuComponent, ContextMenuService } from 'ngx-contextmenu';
import { DocumentListDataStore } from "../../../app-backend/data-stores/document-list-data-store";
import { Router } from "@angular/router";
import { DocTypeReverseMappings } from "../../../app-constants/consts/doc-type-reverse-mappings";

@Component({
  selector: 'app-common-document-table',
  templateUrl: './common-document-table.component.html',
  styleUrls: ['./common-document-table.component.css']
})
export class CommonDocumentTableComponent implements OnInit {

  public rowData = [];
  @Input() columnDefs = [];
  @Input() tableType;
  @Input() title;
  public openPdf = false;
  private gridApi;
  private gridColumnApi;
  private $subscription: Subscription;


  constructor(
    private documentListDataStore: DocumentListDataStore,
    private router: Router,

    public popupPdf: MatDialog,
  ) { }

  ngOnInit() {
    this.columnDefs = [
      { headerName: 'Document ID', field: 'DOC_ID', Width: 100, cellClass: 'text-center' },
      { headerName: 'Doc Name', field: 'DOC_NAME', Width: 100, cellClass: 'text-center' },
      { headerName: 'Doc ref# Factory', field: 'DOC_REF_NO_FACTORY', Width: 100, cellClass: 'text-center' },
      { headerName: 'Factory', field: 'DOC_FACTORY', Width: 100, cellClass: 'text-center' },
      { headerName: 'Created Date', field: 'DOC_CREATED_DATE', Width: 100, cellClass: 'text-center' },
      { headerName: 'Last Update', field: 'DOC_LAST_UPDATE_DATE', Width: 100, cellClass: 'text-center' },
      { headerName: 'Valid From', field: 'DOC_VALID_FROM', Width: 100, cellClass: 'text-center' },
      { headerName: 'Status', field: 'DOC_STATUS', Width: 100, cellClass: 'text-center' }
    ];
    this.$subscription = this.documentListDataStore.docListDataStoreUpdate$.subscribe(data => {
      this.rowData = this.documentListDataStore.documentList;
    })
  }

  public rowClick(event: any) {

    // if(this.tableType == DocumentControlType.TopLevelManuals){
    this.showPDF(event.data);
    // }

  }

  public showPDF(data: any): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '60%';
    dialogConfig.height = '90%';
    dialogConfig.maxHeight = '10000px';
    dialogConfig.data = { columnData: data, tableType: this.tableType };
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop()
    this.popupPdf.open(PdfViewerComponent, dialogConfig);

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
  }

  public openDocumentUploadPopup(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.height = '50%';
    dialogConfig.maxHeight = '10000px';
    dialogConfig.data = '';
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop()
    this.popupPdf.open(DocumentUploaderPopupComponent, dialogConfig);

  }

  public openDocumentUploadPage(): void {
    let tableTypeString;
    switch (this.tableType) {
      case (1): {
        tableTypeString = DocTypeReverseMappings.TopLevelManual;
        break;
      }
      case (2): {
        tableTypeString = DocTypeReverseMappings.Procedure;
        break;
      }
      case (3): {
        tableTypeString = DocTypeReverseMappings.ProductionRecords;
        break;
      }
      case (4): {
        tableTypeString = DocTypeReverseMappings.WorkInstructions;
        break;
      }
      case (5): {
        tableTypeString = DocTypeReverseMappings.TopLevelManual;
        break;
      }


    }
    this.router.navigate(['gts/DocumentControl/addDoc', tableTypeString]);

  }




}
