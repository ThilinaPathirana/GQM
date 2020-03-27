import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {DocStatus} from "../../../app-constants/enums/doc-status-enum";
import {DocStatusConst} from "../../../app-constants/consts/doc-status-const";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {Subscription} from "rxjs";
import {DialogPopupComponent} from "../../common-widgets/dialog-popup/dialog-popup.component";
import {Router} from "@angular/router";

const USER = 'GTSQA100';
const PWD = 'Manchiee100';
@Component({
  selector: 'app-aproval-popup',
  templateUrl: './aproval-popup.component.html',
  styleUrls: ['./aproval-popup.component.css']
})
export class AprovalPopupComponent implements OnInit {

  public currentStatus;
  public nextStatus;
  public docID;
  public userName;
  public pwd;

  public errorMsg = {header: 'Error', content: 'Successfully Updated!!', type: 'error'};
  public successMsg = {header: 'Success', content: 'Something Went Wrong!!', type: 'success'};

  public currentStatusStyle;
  public nextStatusStyle;
  private subscription$: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA)public data: any,
    private dialogRef: MatDialogRef<AprovalPopupComponent>,
    private boService: BackOfficeService,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {

    this.currentStatus = this.data.currentStatus;
    this.docID = this.data.docID;
    this.setCurrentStatusStyle();
    this.setNextStatus();
    this.setNextStatusStyle();

  }

  public setCurrentStatusStyle():void {
    if(this.currentStatus== DocStatusConst.Not_reviewed){
      this.currentStatusStyle = "not-reviwed";
    }
    else if(this.currentStatus == DocStatusConst.QE_reviewed){
      this.currentStatusStyle = "qe-approved";
    }
    else{
      this.currentStatusStyle = "manager-approved";
    }
  }

  public setNextStatusStyle(): void {
    if(this.nextStatus== DocStatusConst.Manager_reviewed){
      this.nextStatusStyle = "manager-approved";
    }
    else if(this.nextStatus == DocStatusConst.QE_reviewed){
      this.nextStatusStyle = "qe-approved";
    }
    else{
      this.nextStatusStyle = "not-reviwed";
    }
  }

  private verification(): boolean{
    if((this.userName === USER) && (this.pwd=== PWD)){
      return true;
    } else {
      return false;
    }
  }

  public approvement(): void{
    const verified = this.verification();
    if(verified){
      const data =  {
        "DOC_ID": this.docID,
        "DOC_STATUS":this.nextStatus,
        "DOC_ACTION": "STATUS_CHANGE",
        "DOC_TYPE": this.docID[0],
      };
      this.boService.addEditDoc(data);
      this.subscription$ = this.boService.addDocSubject$.subscribe(data=>{
        if(data === 1){
          this.successMsg.content = 'State Changed Successfully!!!';
          this.dialog.open(DialogPopupComponent,{data:this.successMsg, panelClass:'custom-dialog-container'});
          this.router.navigateByUrl('gts/DocumentControl/MasterList');
          this.dialogRef.close();
        }

        else{
          this.errorMsg.content = 'State Change Failed';
          this.dialog.open(DialogPopupComponent,{data:this.errorMsg, panelClass:'custom-dialog-container'});
        }
      })
    }
    else{
      this.errorMsg.content = 'User Name/Password is Incorrect';
      this.dialog.open(DialogPopupComponent,{data:this.errorMsg, panelClass:'custom-dialog-container'});
    }
  }

  public setNextStatus():void{
    if(this.currentStatus== DocStatusConst.Not_reviewed){
      this.nextStatus = DocStatusConst.QE_reviewed
    }
    else if(this.currentStatus == DocStatusConst.QE_reviewed){
      this.nextStatus = DocStatusConst.Manager_reviewed
    }
    else{
      this.nextStatus = "Not Approval needed"
    }
  }


}
