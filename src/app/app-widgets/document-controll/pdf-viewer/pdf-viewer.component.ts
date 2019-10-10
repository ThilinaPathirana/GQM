import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {DocumentControlType} from "../../../app-constants/enums/document-control-type.enum";
import {PopCommonDocTableComponent} from "../pop-common-doc-table/pop-common-doc-table.component";
import {AprovalPopupComponent} from "../aproval-popup/aproval-popup.component";
import {DocStatusConst} from "../../../app-constants/consts/doc-status-const";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";

const Headers = {topLevel: "Top Level Manual-", procedure: "Procedures-", production:"Production Records-",
workInst: "Work Instruction-", masterList:"Master List-"};

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
    private boService: BackOfficeService,
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
    else if(this.data.tableType === DocumentControlType.Procedures){
      this.header = Headers.procedure;
    }
    else if (this.data.tableType === DocumentControlType.ProductionRecords){
      this.header = Headers.production;
    }
    else if(this.data.tableType === DocumentControlType.WorkInstructions){
      this.header = Headers.workInst;
    }
    else if(this.data.tableType === DocumentControlType.MasterList){
      this.header = Headers.masterList;
    }
    this.header += this.data.columnData.category + "-" + this.data.columnData.doc_id

  }

  public setData( docStatus:any, docValidFrom:any):void {
    this.docStatus = docStatus;
    this.docValidFrom = docValidFrom;
    this.setCurrentStatusStyle();
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

  public clickHistory(): void{

    this.boService.requestData(RequestTypes.documentHistory,"");
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '60%';
    dialogConfig.height = '90%';
    dialogConfig.maxHeight = '10000px';
    dialogConfig.data = "History Records";
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop()
    this.popupTable.open(PopCommonDocTableComponent, dialogConfig);




  }

  public showApprovalPopup(): void{

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.height = '50%';
    dialogConfig.maxHeight = '10000px';
    dialogConfig.data = {currentStatus: this.docStatus};
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop()
    this.popupTable.open(AprovalPopupComponent, dialogConfig);

  }

  public setCurrentStatusStyle():void {
    if(this.docStatus== DocStatusConst.Not_reviewed){
      this.docStatusStyle = "not-reviwed";
    }
    else if(this.docStatus == DocStatusConst.QE_reviewed){
      this.docStatusStyle = "qe-approved";
    }
    else{
      this.docStatusStyle = "manager-approved";
    }
  }

}
