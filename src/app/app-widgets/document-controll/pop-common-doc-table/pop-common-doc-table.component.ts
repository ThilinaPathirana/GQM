import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {PdfViewerComponent} from '../pdf-viewer/pdf-viewer.component';
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";
import {Subscription} from "rxjs";
import {DocumentHistoryDataStore} from "../../../app-backend/data-stores/document-history-data-store";

@Component({
  selector: 'app-pop-common-doc-table',
  templateUrl: './pop-common-doc-table.component.html',
  styleUrls: ['./pop-common-doc-table.component.css']
})
export class PopCommonDocTableComponent implements OnInit {

  public rowData;
  public columnDefs;
  public gridApi;
  public gridColumnApi;
  public header;
  public tableType = 1;
  private $subscription: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA)public data: any,
    private dialogRef: MatDialogRef<PopCommonDocTableComponent>,
    public popupPdf: MatDialog,
    private docHistoryDataStore: DocumentHistoryDataStore,
  ) { }

  ngOnInit() {

    this.header = this.data;
    this.$subscription = this.docHistoryDataStore.docHistoryDataStoreUpdate$.subscribe(data=>{
      this.rowData = this.docHistoryDataStore.historyList;
    });

    this.columnDefs = [
      {headerName: 'Document ID', field: 'DOC_ID', Width:100, cellClass: 'text-center'},
      {headerName: 'Document Type', field: 'DOC_TYPE', Width:100, cellClass: 'text-center' },
      {headerName: 'Action', field: 'DOC_ACTION', Width:100, cellClass: 'text-center'},
      {headerName: 'Done By', field: 'DOC_ACTION_BY', Width:100, cellClass: 'text-center' },
      {headerName: 'Date of Act', field: 'DOC_ACTION_DATE', Width:100, cellClass: 'text-center' },
    ];
    

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });
  }

  public showPDF(data:any): void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '60%';
    dialogConfig.height = '90%';
    dialogConfig.maxHeight = '10000px';
    dialogConfig.data = {columnData:data.data, tableType:this.tableType};
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop()
    this.popupPdf.open(PdfViewerComponent, dialogConfig);

  }

}
