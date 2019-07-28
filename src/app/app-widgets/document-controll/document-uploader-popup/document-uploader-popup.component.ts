import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {UploadService} from '../../../app-backend/services/upload.service';
import {DialogPopupComponent} from '../../common-widgets/dialog-popup/dialog-popup.component';

@Component({
  selector: 'app-document-uploader-popup',
  templateUrl: './document-uploader-popup.component.html',
  styleUrls: ['./document-uploader-popup.component.css']
})
export class DocumentUploaderPopupComponent implements OnInit {



  constructor(
    @Inject(MAT_DIALOG_DATA)data: any,
    private dialogRef: MatDialogRef<DocumentUploaderPopupComponent>,
    private uploadService: UploadService,
    public dialog: MatDialog
  ) {}

  public errorMsg = {header: 'Upload Status', content: 'Successfully Updated!!'};
  public successMsg = {header: 'Upload Status', content: 'Something Went Wrong!!'}

  public docName = '';
  public AWSUpStatus: boolean;
  public dropFileForm = document.getElementById('dropFileForm');
  public FileLabeltext = 'Choose a file or drag it here';
  public uploadStatus = document.getElementById('uploadStatus');
  public fileInput = document.getElementById('fileInput');
  public droppedFiles;

  ngOnInit() {
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
    const file = this.droppedFiles.item(0);
    this.FileLabeltext = 'uploading......';
    if (this.uploadService.uploadfileaws(file)) {
      this.dialog.open(DialogPopupComponent, { data: this.successMsg , panelClass: 'custom-dialog-container'});
    } else {
      this.dialog.open(DialogPopupComponent, { data: this.errorMsg , panelClass: 'custom-dialog-container'});
    }
    this.FileLabeltext = 'Choose a file or drag it here';
  }

  // uploadFiles(event) {
  //   event.preventDefault();
  //   this.changeStatus('Uploading...');
  //
  //   const formData = new FormData();
  //
  //   for (let i = 0, file; (file = this.droppedFiles[i]); i++) {
  //     formData.append(this.fileInput.name, file, file.name);
  //   }
  //
  //   const xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = function(data) {
  //     // handle server response and change status of
  //     // upload process via changeStatus(text)
  //     console.log(xhr.response);
  //   };
  //   xhr.open(this.dropFileForm.method, this.dropFileForm.action, true);
  //   xhr.send(formData);
  // }

  // changeStatus(text) {
  //   this.uploadStatus.innerText = text;
  // }

  //
  //
  //
  //
  // overrideDefault(event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  // }
  //
  // fileHover() {
  //   this.dropFileForm.classList.add('fileHover');
  // }
  //
  // fileHoverEnd() {
  //   this.dropFileForm.classList.remove('fileHover');
  // }
  //
  // addFiles(event) {
  //   this.droppedFiles = event.target.files || event.dataTransfer.files;
  //   this.showFiles(this.droppedFiles);
  // }
  //
  // showFiles(files) {
  //   if (files.length > 1) {
  //     this.fileLabelText.innerText = files.length + ' files selected';
  //   } else {
  //     this.fileLabelText.innerText = files[0].name;
  //   }
  // }
  //
  // uploadFiles(event) {
  //   event.preventDefault();
  //   this.changeStatus('Uploading...');
  //
  //   const formData = new FormData();
  //
  //   for (let i = 0, file; (file = droppedFiles[i]); i++) {
  //     formData.append(fileInput.name, file, file.name);
  //   }
  //
  //   const xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = function(data) {
  //     // handle server response and change status of
  //     // upload process via changeStatus(text)
  //     console.log(xhr.response);
  //   };
  //   xhr.open(dropFileForm.method, dropFileForm.action, true);
  //   xhr.send(formData);
  // }
  //
  // // changeStatus(text) {
  // //   this.uploadStatus.innerText = text;
  // // }


}
