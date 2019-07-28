import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-document-uploader-popup',
  templateUrl: './document-uploader-popup.component.html',
  styleUrls: ['./document-uploader-popup.component.css']
})
export class DocumentUploaderPopupComponent implements OnInit {

  public docName = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)data: any,
    private dialogRef: MatDialogRef<DocumentUploaderPopupComponent>,
  ) { }

  ngOnInit() {
  }

}
