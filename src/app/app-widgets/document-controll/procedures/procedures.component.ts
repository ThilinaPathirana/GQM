import { Component, OnInit } from '@angular/core';
import {DocumentControlType} from '../../../app-constants/enums/document-control-type.enum';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {

  public rowData = [];
  public columnDefs = [];
  public tableType = DocumentControlType.Procedures;

  constructor() { }

  ngOnInit() {

    this.columnDefs = [
      {headerName: 'Doucument ID', field: 'doc_id', Width:100, cellClass: 'text-center'},
      {headerName: 'Category', field: 'category', Width:100, cellClass: 'text-center' },
      {headerName: 'Type', field: 'type', Width:100, cellClass: 'text-center'},
      {headerName: 'Created Date', field: 'created_date', Width:100, cellClass: 'text-center' },
      {headerName: 'Version', field: 'version', Width:100, cellClass: 'text-center' },
      {headerName: 'Last Update', field: 'last_update', Width:100, cellClass: 'text-center'},
      {headerName: 'Valid From', field: 'valid_from', Width:100, cellClass: 'text-center'},
      {headerName: 'Status', field: 'status',Width:100, cellClass: 'text-center' }
    ];

    this.rowData = [
      {doc_id:'bcd143', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'manager'},
      {doc_id:'bcd145', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'manager'},
      {doc_id:'bcd146', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'manager'},
      {doc_id:'bcd147', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'manager'},
      {doc_id:'bcd148', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'manager'},
      {doc_id:'bcd149', category:'level1 Manual', type: 'steamer', created_date: '19.7.21', version:'1.3', valid_from:'19.01.07', status:'manager'},


    ];
  }

}
