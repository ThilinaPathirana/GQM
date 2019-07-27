import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-common-document-table',
  templateUrl: './common-document-table.component.html',
  styleUrls: ['./common-document-table.component.css']
})
export class CommonDocumentTableComponent implements OnInit {

  @Input() public rowData = [];
  @Input() columnDefs = [];


  constructor() { }

  ngOnInit() {
  }

}
