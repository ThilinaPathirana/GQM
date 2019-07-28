import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-instructions',
  templateUrl: './work-instructions.component.html',
  styleUrls: ['./work-instructions.component.css']
})
export class WorkInstructionsComponent implements OnInit {

  public pdfSrc;
  constructor() { }

  ngOnInit() {
    this.pdfSrc = "http://maingtsbuc.s3-website.us-east-2.amazonaws.com/AG_2018_141.pdf";
  }

}
