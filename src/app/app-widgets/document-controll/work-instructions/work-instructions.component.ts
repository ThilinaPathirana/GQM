import { Component, OnInit } from '@angular/core';
import {DocumentControlType} from "../../../app-constants/enums/document-control-type.enum";

@Component({
  selector: 'app-work-instructions',
  templateUrl: './work-instructions.component.html',
  styleUrls: ['./work-instructions.component.css']
})
export class WorkInstructionsComponent implements OnInit {

  public rowData = [];
  public columnDefs = [];
  public tableType = DocumentControlType.WorkInstructions;
  constructor() { }

  ngOnInit() {

    this.columnDefs = [
      {headerName: 'Document ID', field: 'doc_id', Width:100, cellClass: 'text-center'},
      {headerName: 'Document Name', field: 'category', Width:100, cellClass: 'text-center' },
      {headerName: 'Type', field: 'type', Width:100, cellClass: 'text-center'},
      {headerName: 'Created Date', field: 'created_date', Width:100, cellClass: 'text-center' },
      {headerName: 'Version', field: 'version', Width:100, cellClass: 'text-center' },
      {headerName: 'Last Update', field: 'last_update', Width:100, cellClass: 'text-center'},
      {headerName: 'Valid From', field: 'valid_from', Width:100, cellClass: 'text-center'},
      {headerName: 'Status', field: 'status',Width:100, cellClass: 'text-center' }
    ];

    this.rowData = [
      {doc_id:'GO / GN / 01', category:'EMS Management', type: 'General', created_date: '14 March, 2019', version:'1.3', last_update:'14 March, 2019',valid_from:'01 April, 2019', status:'Manager Approved'},
      {doc_id:'GO / AS / 02', category:'Aspect and Impact procedure', type: 'Internal Audit', created_date: '31 May, 2019', version:'1.1', last_update:'10 June, 2019',valid_from:'11 June, 2019', status:'QE Approved'},
      {doc_id:'MA / QA / 03', category:'Management Programme', type: 'Document Control', created_date: '14 Feb, 2019', version:'1.8',last_update:'15 Feb, 2019', valid_from:'20 Feb, 2019', status:'Not Reviewed'},
      {doc_id:'MN / QA / 04', category:'Legal Register ', type: 'Manual', created_date: '01 July, 2019', version:'1.3',last_update:'14 July, 2019', valid_from:'20 July, 2019', status:'Manager Approved'},
      {doc_id:'DA / AS / 05', category:'Calibration schedule', type: 'Legal', created_date: '12 feb, 2019', version:'2.0',last_update:'14 March, 2019', valid_from:'20 March, 2019', status:'QE Approved'},
      {doc_id:'KL / SA / 06', category:'Life cycle analysis ', type: 'General', created_date: '14 April, 2019', version:'1.9',last_update:'14 March, 2019', valid_from:'10 April, 2019', status:'Not Reviewed'},
      {doc_id:'RE / AS / 07', category:'Aspect and Impact Register', type: 'Legal', created_date: '22 May, 2019', version:'1.3',last_update:'14 March, 2019', valid_from:'01 April, 2019', status:'Manager Approved'},
      {doc_id:'AD / QA / 08', category:'Internal CAR ', type: 'General', created_date: '02 Jan, 2019', version:'1.1',last_update:'14 March, 2019', valid_from:'14 March, 2019', status:'QE Approved'},
      {doc_id:'RE / QA / 09', category:'Contractor / Supplier Declaration', type: 'Internal Audit', created_date: '19 Jan, 2019', version:'1.8',last_update:'01 Feb, 2019', valid_from:'14 March, 2019', status:'Not Reviewed'},
      {doc_id:'MN / QE / 10', category:'List of key performance indicators', type: 'Manual', created_date: '09 June, 2019', version:'1.3',last_update:'01 July, 2019', valid_from:'14 July, 2019', status:'Manager Approved'},
      {doc_id:'GO / LO / 11', category:'Chemical purchasing procedure (Non- production)', type: 'General', created_date: '27 July, 2019', version:'2.0',last_update:'27 July, 2019', valid_from:'30 July, 2019', status:'QE Approved'},
      {doc_id:'RE / DA / 12', category:'Chemical purchasing procedure (production chemicals)', type: 'Internal Audit', created_date: '25 Feb, 2019', version:'1.9',last_update:'29 Feb, 2019', valid_from:'01 March, 2019', status:'Not Reviewed'},


    ];
  }

}
