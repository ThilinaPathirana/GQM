import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";

@Component({
  selector: 'app-comment-dialog-box',
  templateUrl: './comment-dialog-box.component.html',
  styleUrls: ['./comment-dialog-box.component.css']
})
export class CommentDialogBoxComponent implements OnInit {

  public emailAddress;
  public comment;
  public docID;

  constructor(
    @Inject(MAT_DIALOG_DATA)public data: any,
    private dialogRef: MatDialogRef<CommentDialogBoxComponent>,
    private boService: BackOfficeService
  ) { }

  ngOnInit() {
    this.docID = this.data.docID;
  }

  public addComment(): void {

    const data = {
      "EMAIL_ADDRESS": this.emailAddress,
      "DOC_ID": this.docID,
      "REASON": this.comment
    };
    this.boService.sendCommentEmail(data);

    this.dialogRef.close()

  }

}
