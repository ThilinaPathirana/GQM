import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {PdfViewerComponent} from '../pdf-viewer/pdf-viewer.component';
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";
import {Subscription} from "rxjs";
import {DocumentHistoryDataStore} from "../../../app-backend/data-stores/document-history-data-store";
import {PopupTableTypes} from "../../../app-constants/enums/popup-table-type.enum";

@Component({
  selector: 'app-pop-common-doc-table',
  templateUrl: './pop-common-doc-table.component.html',
  styleUrls: ['./pop-common-doc-table.component.css']
})
export class PopCommonDocTableComponent implements OnInit {

  public rowData = [];
  public columnDefs;
  public gridApi;
  public inputData;
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

    this.header = this.data.header;
    this.tableType = this.data.tableType;
    this.inputData = this.data.data;


    if(this.tableType === PopupTableTypes.history){
      this.columnDefs = [
        {headerName: 'Document ID', field: 'DOC_ID', Width:100, cellClass: 'text-center'},
        {headerName: 'Document Type', field: 'DOC_TYPE', Width:100, cellClass: 'text-center' },
        {headerName: 'Action', field: 'DOC_ACTION', Width:100, cellClass: 'text-center'},
        {headerName: 'Done By', field: 'DOC_ACTION_BY', Width:100, cellClass: 'text-center' },
        {headerName: 'Date of Act', field: 'DOC_ACTION_DATE', Width:100, cellClass: 'text-center' },
      ];
      this.$subscription = this.docHistoryDataStore.docHistoryDataStoreUpdate$.subscribe(data=>{
        this.rowData = this.docHistoryDataStore.historyList;
      });
    }

    else if(this.tableType === PopupTableTypes.linkedList) {
      this.columnDefs = [
        {headerName: 'Document ID', field: 'DOC_ID', Width:100, cellClass: 'text-center'},
        {headerName: 'Comment', field: 'COMNT', Width:100, cellClass: 'text-center' },
      ]
      this.createLinkedListRowData();
    }


    

  }

  private createLinkedListRowData(): void{
    const docs = this.inputData.split(',');
    for (let doc of docs){
      const splittedDoc = doc.split('|');
      this.rowData.push({DOC_ID: splittedDoc[0], COMNT: splittedDoc[1]})
    }
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
