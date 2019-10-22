import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {DocumentControlType} from "../../../app-constants/enums/document-control-type.enum";
import {PopCommonDocTableComponent} from "../pop-common-doc-table/pop-common-doc-table.component";
import {AprovalPopupComponent} from "../aproval-popup/aproval-popup.component";
import {DocStatusConst} from "../../../app-constants/consts/doc-status-const";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";
import {PopupTableTypes} from "../../../app-constants/enums/popup-table-type.enum";
import {Router} from "@angular/router";

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
    private router: Router,
  ) { }

  ngOnInit() {
    this.pdfSrc = "https://gtsdatabucket.s3.us-east-2.amazonaws.com/Documents/"+ this.data.columnData.DOC_ID+".pdf";
    this.createHeader();
    const columnData = this.data.columnData;
    this.setData(columnData.DOC_STATUS,columnData.valid_from);
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
    this.header += this.data.columnData.DOC_ID

  }

  public setData( docStatus:any, docValidFrom:any):void {

    this.docStatus = this.data.columnData.DOC_STATUS;

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
    dialogConfig.data = {header:this.header, tableType: PopupTableTypes.linkedList,data: this.data.columnData.DOC_LINKED_DOCS};
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop()
    this.popupTable.open(PopCommonDocTableComponent, dialogConfig);

  }

  public clickHistory(): void{

    const queryString = "DOCUMENT_ID="+ "'"+ this.data.columnData.DOC_ID + "'";

    this.boService.requestData(RequestTypes.documentHistory,queryString);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '60%';
    dialogConfig.height = '90%';
    dialogConfig.maxHeight = '10000px';
    dialogConfig.data = {header:"History Records", tableType: PopupTableTypes.history};
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
    dialogConfig.data = {currentStatus: this.docStatus, docID: this.data.columnData.DOC_ID};
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop()
    this.popupTable.open(AprovalPopupComponent, dialogConfig);
    this.dialogRef.close();

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

  public clickEditDocument(): void {
    this.router.navigate(['gts/DocumentControl/editDoc',this.data.columnData.DOC_ID]);
    this.dialogRef.close();
  }

}
