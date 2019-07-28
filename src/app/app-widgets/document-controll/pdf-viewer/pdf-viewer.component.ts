import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {DocumentControlType} from "../../../app-constants/enums/document-control-type.enum";
import {PopCommonDocTableComponent} from "../pop-common-doc-table/pop-common-doc-table.component";

const Headers = {topLevel: "Top Level Manual-"}

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  public pdfSrc;
  public header;
  public docID;
  public docStatus;
  public docValidFrom;
  public docStatusStyle = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)public data: any,
    private dialogRef: MatDialogRef<PdfViewerComponent>,
    public popupTable : MatDialog,
  ) { }

  ngOnInit() {
    this.pdfSrc = "http://maingtsbuc.s3-website.us-east-2.amazonaws.com/AG_2018_141.pdf";
    this.createHeader();
    const columnData = this.data.columnData;
    this.setData(columnData.status,columnData.valid_from);
  }

  public createHeader():void{
    if(this.data.tableType === DocumentControlType.TopLevelManuals){
      this.header = Headers.topLevel

    }
    this.header += this.data.columnData.category + "-" + this.data.columnData.doc_id

  }

  public setData( docStatus:any, docValidFrom:any):void {
    this.docStatus = docStatus;
    this.docValidFrom = docValidFrom;

    if(docStatus === "manager"){
      this.docStatusStyle = "manager";
    }
  }

  public clickList():void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '60%';
    dialogConfig.height = '90%';
    dialogConfig.maxHeight = '10000px';
    dialogConfig.data = this.header;
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop()
    this.popupTable.open(PopCommonDocTableComponent, dialogConfig);

  }

}
