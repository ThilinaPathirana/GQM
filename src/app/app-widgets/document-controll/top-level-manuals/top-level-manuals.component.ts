import { Component, OnInit } from '@angular/core';
import {DocumentContentType} from "aws-sdk/clients/workdocs";
import {DocumentControlType} from "../../../app-constants/enums/document-control-type.enum";


@Component({
  selector: 'app-top-level-manuals',
  templateUrl: './top-level-manuals.component.html',
  styleUrls: ['./top-level-manuals.component.css']
})
export class TopLevelManualsComponent implements OnInit {


  public rowData = [];
  public columnDefs = [];
  public tableType = DocumentControlType.TopLevelManuals

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
      {doc_id:'AS / GN / 01', category:'Records Control Plan', type: 'General', created_date: '14 March, 2019', version:'1.3', last_update:'14 March, 2019',valid_from:'01 April, 2019', status:'Manager Approved'},
      {doc_id:'AS / GN / 02', category:'Training Calendar ', type: 'General', created_date: '31 May, 2019', version:'1.1', last_update:'10 June, 2019',valid_from:'11 June, 2019', status:'QE Approved'},
      {doc_id:'AS / GN / 03', category:'List of objective and targets', type: 'General', created_date: '14 Feb, 2019', version:'1.8',last_update:'15 Feb, 2019', valid_from:'20 Feb, 2019', status:'Not Reviewed'},
      {doc_id:'AS / GN / 04', category:'Significance energy uses monitoring plan', type: 'General', created_date: '01 July, 2019', version:'1.3',last_update:'14 July, 2019', valid_from:'20 July, 2019', status:'Manager Approved'},
      {doc_id:'AS / GN / 05', category:'Calibration schedule', type: 'General', created_date: '12 feb, 2019', version:'2.0',last_update:'14 March, 2019', valid_from:'20 March, 2019', status:'QE Approved'},
      {doc_id:'AS / GN / 06', category:'Life cycle analysis ', type: 'General', created_date: '14 April, 2019', version:'1.9',last_update:'14 March, 2019', valid_from:'10 April, 2019', status:'Not Reviewed'},
      {doc_id:'AS / GN / 07', category:'Aspect and Impact Register', type: 'General', created_date: '22 May, 2019', version:'1.3',last_update:'14 March, 2019', valid_from:'01 April, 2019', status:'Manager Approved'},
      {doc_id:'AS / GN / 08', category:'Internal CAR ', type: 'General', created_date: '02 Jan, 2019', version:'1.1',last_update:'14 March, 2019', valid_from:'14 March, 2019', status:'QE Approved'},
      {doc_id:'AS / GN / 09', category:'Contractor / Supplier Declaration', type: 'General', created_date: '19 Jan, 2019', version:'1.8',last_update:'01 Feb, 2019', valid_from:'14 March, 2019', status:'Not Reviewed'},
      {doc_id:'AS / GN / 10', category:'List of key performance indicators', type: 'General', created_date: '09 June, 2019', version:'1.3',last_update:'01 July, 2019', valid_from:'14 July, 2019', status:'Manager Approved'},
      {doc_id:'AS / GN / 11', category:'Chemical purchasing procedure (Non- production)', type: 'General', created_date: '27 July, 2019', version:'2.0',last_update:'27 July, 2019', valid_from:'30 July, 2019', status:'QE Approved'},
      {doc_id:'AS / GN / 12', category:'Chemical purchasing procedure (production chemicals)', type: 'General', created_date: '25 Feb, 2019', version:'1.9',last_update:'29 Feb, 2019', valid_from:'01 March, 2019', status:'Not Reviewed'},


    ];


  }

}
