import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  public pdfSrc;

  constructor(
    @Inject(MAT_DIALOG_DATA)data: any,
    private dialogRef: MatDialogRef<PdfViewerComponent>,
  ) { }

  ngOnInit() {
    this.pdfSrc = "http://maingtsbuc.s3-website.us-east-2.amazonaws.com/AG_2018_141.pdf";
  }

}
