import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {PdfViewerComponent} from '../pdf-viewer/pdf-viewer.component';

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

  constructor(
    @Inject(MAT_DIALOG_DATA)public data: any,
    private dialogRef: MatDialogRef<PopCommonDocTableComponent>,
    public popupPdf: MatDialog,
  ) { }

  ngOnInit() {

    this.header = this.data;

    this.columnDefs = [
      {headerName: 'Doucument ID', field: 'doc_id', Width: 100, cellClass: 'text-center'},
      {headerName: 'Category', field: 'category', Width: 100, cellClass: 'text-center' },
      {headerName: 'Type', field: 'type', Width: 100, cellClass: 'text-center'},
      {headerName: 'Created Date', field: 'created_date', Width: 100, cellClass: 'text-center' },
      {headerName: 'Version', field: 'version', Width: 100, cellClass: 'text-center' },
      {headerName: 'Last Update', field: 'last_update', Width: 100, cellClass: 'text-center'},
      {headerName: 'Valid From', field: 'valid_from', Width: 100, cellClass: 'text-center'},
      {headerName: 'Status', field: 'status', Width: 100, cellClass: 'text-center' }
    ];

    this.rowData = [
      {doc_id:'bcd143', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'Manager Approved'},
      {doc_id:'bcd145', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'QE Approved'},
      {doc_id:'bcd146', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'Not Reviewed'},
      {doc_id:'bcd147', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'Manager Approved'},
      {doc_id:'bcd148', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'QE Approved'},
      {doc_id:'bcd149', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'Not Reviewed'},


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
