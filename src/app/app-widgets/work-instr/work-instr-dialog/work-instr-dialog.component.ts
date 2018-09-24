import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-work-instr-dialog',
  templateUrl: './work-instr-dialog.component.html',
  styleUrls: ['./work-instr-dialog.component.css']
})
export class WorkInstrDialogComponent {

  public config;
  public popupWin;
  public printContents;
  constructor(public dialogRef: MatDialogRef<WorkInstrDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.config = data.config;
  }


  public printDiv(divName: any): void {
    this.printContents = document.getElementById(divName).innerHTML;
    this.popupWin = window.open('', '_blank', 'width=500,height=600');
    this.popupWin.document.open();
    this.popupWin.document.write(
      '<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head>' +
      '<body onload="window.print()">' + this.printContents + '</body></html>');
    this.popupWin.document.close();
  }
}
