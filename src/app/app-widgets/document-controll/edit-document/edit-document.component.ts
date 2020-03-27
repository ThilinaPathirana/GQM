import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {UploadService} from "../../../app-backend/services/upload.service";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {DocumentListDataStore} from "../../../app-backend/data-stores/document-list-data-store";
import {DialogPopupComponent} from "../../common-widgets/dialog-popup/dialog-popup.component";

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit {

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
  // public isKeyGeneratePressed = false;
  private subscription$: Subscription;
  private renamedFile: File;
  // public generatedId;
  public docID;


  constructor(
    private uploadService: UploadService,
    private boService : BackOfficeService,
    private route: ActivatedRoute,
    private router: Router,
    private documentListDataStore: DocumentListDataStore,
    public dialog: MatDialog,
  ) {
    this.docID = this.route.snapshot.paramMap.get('id');
    this.loadData();
  }

  ngOnInit() {
  }

  public loadData(): void {
    for (let doc of this.documentListDataStore.documentList){
      if(doc.DOC_ID === this.docID){
        this.docName = doc.DOC_NAME;
        this.docRefNum = doc.DOC_REF_NO_FACTORY;
        this.scope = doc.DOC_SCOPE;
        this.scopeComment = doc.DOC_SCOPE_COMMENT;
        if(doc.DOC_LINKED_DOCS){
          this.createLinkedDocList(doc.DOC_LINKED_DOCS);
        }
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

  addFiles(event) {
    this.droppedFiles = event.target.files || event.dataTransfer.files;
    this.showFiles(this.droppedFiles);
  }

  showFiles(files) {
    this.FileLabeltext = files[0].name;
  }

  overrideDefault(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  uploadaws(): boolean {
    if(this.droppedFiles){
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

  }

  public saveDoc(): void{

    let linkedDocString = '';

    for (let doc of this.linkedDocs){
      linkedDocString = linkedDocString + doc.Id + "|" + doc.comment + ",";
    }

    const data =  {
      "DOC_ID": this.docID,
      "DOC_NAME": this.docName,
      "DOC_REF_NO_FACTORY": this.docRefNum,
      "DOC_FACTORY": "Mirigama",
      "DOC_STATUS":"0",
      "DOC_ACTION": "EDIT",
      "DOC_TYPE": this.docID[0],
      "DOC_SCOPE": this.scope,
      "DOC_SCOPE_COMMENT": this.scopeComment,
      "DOC_LINKED_DOCS":linkedDocString,
    };

    // if(!this.isKeyGeneratePressed){
    //   this.errorMsg.content = 'please Generate Document ID';
    //   this.dialog.open(DialogPopupComponent,{data:this.errorMsg, panelClass:'custom-dialog-container'})
    // }

    if(!this.docName || !this.docRefNum || ! this.scope || !this.scopeComment){
      this.errorMsg.content = 'Please Fill all the Fields';
      this.dialog.open(DialogPopupComponent,{data:this.errorMsg, panelClass:'custom-dialog-container'})
    }
    // else if(!this.droppedFiles){
    //   this.errorMsg.content = 'please Add the Document to Upload';
    //   this.dialog.open(DialogPopupComponent,{data:this.errorMsg, panelClass:'custom-dialog-container'})
    // }

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

  private renameFile(file: File): void {
    const fileType = file.name.split(".")[1];
    const renamedFileName = this.docID + "." + fileType;
    this.renamedFile = new File([file],renamedFileName,{type: file.type})
  }

  private createLinkedDocList(docString: string): void{
    const docs = docString.split(',');
    for (let doc of docs){
      if(doc!==''){
        const splittedDoc = doc.split('|');
        this.linkedDocs.push({Id: splittedDoc[0], comment: splittedDoc[1]})
      }
    }
  }


}
