import {Component, Inject, OnInit} from '@angular/core';
import {DialogPopupComponent} from "../../common-widgets/dialog-popup/dialog-popup.component";
import {UploadService} from "../../../app-backend/services/upload.service";
import { MatDialog,} from "@angular/material";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {DocStatusConst} from "../../../app-constants/consts/doc-status-const";

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  public docType = "T";
  public docName;
  public docRefNum;
  public scopeComment;
  public pointToFollowItems = [];
  public newValue = null;
  public newLinkedDocID;
  public newLinkedDocComnt;
  public scope;
  public linkedDocs = [];

  public AWSUpStatus: boolean;
  public dropFileForm = document.getElementById('dropFileForm');
  public FileLabeltext = 'Choose a file or drag it here';
  public uploadStatus = document.getElementById('uploadStatus');
  public fileInput = document.getElementById('fileInput');
  public droppedFiles;

  public errorMsg = {header: 'Error', content: 'Successfully Updated!!', type: 'error'};
  public successMsg = {header: 'Success', content: 'Something Went Wrong!!', type: 'success'};
  public isKeyGeneratePressed = false;
  private subscription$: Subscription;
  private renamedFile: File;
  public generatedId;

  constructor(
    // @Inject(MAT_DIALOG_DATA)data: any,
    // private dialogRef: MatDialogRef<AddDocumentComponent>,
    private uploadService: UploadService,
    private boService : BackOfficeService,
    private router: Router,
    public dialog: MatDialog
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

  uploadaws(): boolean {
    let file = this.droppedFiles.item(0);
    this.renameFile(file);
    this.FileLabeltext = 'uploading......';
    let uploadStatus = false;
    if (this.uploadService.uploadfileaws(this.renamedFile)) {
      uploadStatus = true;
        // this.dialog.open(DialogPopupComponent, { data: this.successMsg , panelClass: 'custom-dialog-container'});
      // } else {
      //   this.dialog.open(DialogPopupComponent, { data: this.errorMsg , panelClass: 'custom-dialog-container'});
      // }
      // this.FileLabeltext = 'Choose a file or drag it here';
    }
    return uploadStatus;
  }

  private renameFile(file: File): void {
    const fileType = file.name.split(".")[1];
    const renamedFileName = this.generatedId + "." + fileType;
    this.renamedFile = new File([file],renamedFileName,{type: file.type})
  }

  public addDoc(): void {

    let linkedDocString = '';

    for (let doc of this.linkedDocs){
      linkedDocString = linkedDocString + doc.Id + "|" + doc.comment + ",";
    }

    const data =  {
      "DOC_ID": this.generatedId,
      "DOC_NAME": this.docName,
      "DOC_REF_NO_FACTORY": this.docRefNum,
      "DOC_FACTORY": "Mirigama",
      "DOC_STATUS":DocStatusConst.Not_reviewed,
      "DOC_ACTION": "ADD",
      "DOC_TYPE": this.docType,
      "DOC_SCOPE": this.scope,
      "DOC_SCOPE_COMMENT": this.scopeComment,
      "DOC_LINKED_DOCS":linkedDocString,
    };

    if(!this.isKeyGeneratePressed){
      this.errorMsg.content = 'please Generate Document ID';
      this.dialog.open(DialogPopupComponent,{data:this.errorMsg, panelClass:'custom-dialog-container'})
    }

    else if(!this.docName || !this.docRefNum || ! this.scope || !this.scopeComment){
      this.errorMsg.content = 'Please Fill all the Fields';
      this.dialog.open(DialogPopupComponent,{data:this.errorMsg, panelClass:'custom-dialog-container'})
    }
    else if(!this.droppedFiles){
      this.errorMsg.content = 'please Add the Document to Upload';
      this.dialog.open(DialogPopupComponent,{data:this.errorMsg, panelClass:'custom-dialog-container'})
    }

    else{
      this.boService.addEditDoc(data);
      const pdfStatus = this.uploadaws();
      this.subscription$ = this.boService.addDocSubject$.subscribe(data=>{
        const dataStatus = data;

        if (dataStatus === 1){
          this.successMsg.content = 'Your Document Uploaded Successfully!!!';
          this.dialog.open(DialogPopupComponent,{data:this.successMsg, panelClass:'custom-dialog-container'})
          this.router.navigateByUrl('gts/DocumentControl/MasterList');

        }
        else if (dataStatus === -1) {
          this.errorMsg.content = 'Document Upload Failed';
          this.dialog.open(DialogPopupComponent,{data:this.errorMsg, panelClass:'custom-dialog-container'})
        }
      })

    }
  }

  public generateDocId(): void{
    this.isKeyGeneratePressed = true;
    const data = {
        "DOC_TYPE": this.docType,
    };

    this.boService.generateID(data);
    this.subscription$ = this.boService.generateIDSubject$.subscribe(data=>{
      const key = data;
      this.generatedId = key;
    })
  }
}
