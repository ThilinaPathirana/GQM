import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DocStatus} from "../../../app-constants/enums/doc-status-enum";
import {DocStatusConst} from "../../../app-constants/consts/doc-status-const";

@Component({
  selector: 'app-aproval-popup',
  templateUrl: './aproval-popup.component.html',
  styleUrls: ['./aproval-popup.component.css']
})
export class AprovalPopupComponent implements OnInit {

  public currentStatus;
  public nextStatus;
  public userName;
  public pwd;

  public currentStatusStyle;
  public nextStatusStyle;

  constructor(
    @Inject(MAT_DIALOG_DATA)public data: any,
    private dialogRef: MatDialogRef<AprovalPopupComponent>,
  ) { }

  ngOnInit() {

    this.currentStatus = this.data.currentStatus;
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

  public approvement(): void{

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
