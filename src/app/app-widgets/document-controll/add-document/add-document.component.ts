import {Component, Inject, OnInit} from '@angular/core';
import {DialogPopupComponent} from "../../common-widgets/dialog-popup/dialog-popup.component";
import {UploadService} from "../../../app-backend/services/upload.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  public docType = "Procedure";
  public docName = "";
  public docRefNum = "";
  public scopeComment = "";
  public pointToFollowItems = [];
  public newValue = null;
  public newLinkedDocID;
  public newLinkedDocComnt;
  public linkedDocs = [{Id: "1234", comment: "hfwjrgwrgkwrgkjhgwhfjgjg"}, {
    Id: "1234",
    comment: "hfwjrgwrgkwrgkjhgwhfjgjg"
  }];

  public AWSUpStatus: boolean;
  public dropFileForm = document.getElementById('dropFileForm');
  public FileLabeltext = 'Choose a file or drag it here';
  public uploadStatus = document.getElementById('uploadStatus');
  public fileInput = document.getElementById('fileInput');
  public droppedFiles;

  public errorMsg = {header: 'Upload Status', content: 'Successfully Updated!!'};
  public successMsg = {header: 'Upload Status', content: 'Something Went Wrong!!'};
  private subscription$: Subscription;
  private renamedFile: File;
  private generatedId;

  constructor(
    // @Inject(MAT_DIALOG_DATA)data: any,
    // private dialogRef: MatDialogRef<AddDocumentComponent>,
    private uploadService: UploadService,
    private boService : BackOfficeService,
    // public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  public selectItem(itemID: any): void {

    for (let item of this.pointToFollowItems) {
      item.isSelected = false;
    }
    this.pointToFollowItems[itemID].isSelected = true;
  }

  public removeItem(itemID: any) {
    if (this.pointToFollowItems[itemID].isSelected) {
      this.pointToFollowItems.splice(itemID, 1);
    }
  }

  public addItem(): void {
    if (this.newValue) {
      this.pointToFollowItems.push({data: this.newValue, isSelected: false});
      this.newValue = null;

      for (let item of this.pointToFollowItems) {
        item.isSelected = false;
      }
    }
  }

  public linkDoc(): void {
    if (this.newLinkedDocComnt && this.newLinkedDocID) {
      this.linkedDocs.push({Id: this.newLinkedDocID, comment: this.newLinkedDocComnt});
      this.newLinkedDocID = null;
      this.newLinkedDocComnt = null;
    }
  }

  overrideDefault(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // fileHover() {
  //   this.dropFileForm.classList.add('fileHover');
  // }
  //
  // fileHoverEnd() {
  //   this.dropFileForm.classList.remove('fileHover');
  // }

  addFiles(event) {
    this.droppedFiles = event.target.files || event.dataTransfer.files;
    this.showFiles(this.droppedFiles);
  }

  showFiles(files) {
    this.FileLabeltext = files[0].name;
  }

  uploadaws() {
    let file = this.droppedFiles.item(0);
    file._name = "aa123.pdf";
    this.renamedFile = new File([file],"qq123.pdf",{type: file.type})

    this.FileLabeltext = 'uploading......';
    if (this.uploadService.uploadfileaws(this.renamedFile)) {
      const x = 1;
      //   this.dialog.open(DialogPopupComponent, { data: this.successMsg , panelClass: 'custom-dialog-container'});
      // } else {
      //   this.dialog.open(DialogPopupComponent, { data: this.errorMsg , panelClass: 'custom-dialog-container'});
      // }
      this.FileLabeltext = 'Choose a file or drag it here';
    }

  }
  public addDoc(): void {
    const data =  {
      "DOC_ID": "4",
      "DOC_REF_NO_FACTORY":"34563r",
      "DOC_FACTORY": "Badulla",
      "DOC_REF_NO_GTS": "GTS56787",
      "DOC_STATUS":"0",
      "DOC_TYPE":"1"
    };
    this.boService.addData(data);
    this.subscription$ = this.boService.addDocSubject$.subscribe(data=>{
      const status = data;
    })


  }
}
