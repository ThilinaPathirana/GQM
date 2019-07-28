import {Component, Input, OnInit} from '@angular/core';
import {DocumentControlType} from "../../../app-constants/enums/document-control-type.enum";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {PdfViewerComponent} from "../pdf-viewer/pdf-viewer.component";
import {TrainingChartComponent} from "../../training/training-chart/training-chart.component";
import {Overlay, ScrollStrategy} from "@angular/cdk/overlay";
import {DocumentUploaderPopupComponent} from "../document-uploader-popup/document-uploader-popup.component";

@Component({
  selector: 'app-common-document-table',
  templateUrl: './common-document-table.component.html',
  styleUrls: ['./common-document-table.component.css']
})
export class CommonDocumentTableComponent implements OnInit {

  @Input() public rowData = [];
  @Input() columnDefs = [];
  @Input() tableType;
  public openPdf = false;
  private gridApi;
  private gridColumnApi;



  constructor(public popupPdf : MatDialog, public overlay: Overlay) { }

  ngOnInit() {
  }

  public rowClick(event:any){

    if(this.tableType == DocumentControlType.TopLevelManuals){
      this.showPDF('sss');
    }

  }

  public showPDF(pdfID: any): void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '60%';
    dialogConfig.height = '90%';
    dialogConfig.maxHeight = '10000px'
    dialogConfig.data = pdfID;
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop()
    this.popupPdf.open(PdfViewerComponent, dialogConfig);

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

  public openDocumentUploadPopup(): void{

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.height = '50%';
    dialogConfig.maxHeight = '10000px'
    dialogConfig.data = '';
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop()
    this.popupPdf.open(DocumentUploaderPopupComponent, dialogConfig);

  }


}
