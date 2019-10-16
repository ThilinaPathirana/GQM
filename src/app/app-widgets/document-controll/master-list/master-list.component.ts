import { Component, OnInit } from '@angular/core';
import {DocumentControlType} from "../../../app-constants/enums/document-control-type.enum";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})
export class MasterListComponent implements OnInit {

  public rowData = [];
  public columnDefs = [];
  public tableType = DocumentControlType.MasterList;

  constructor(
    private boService: BackOfficeService
  ) { }

  ngOnInit() {

    this.boService.requestData(RequestTypes.documentMeta,"");

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



  }

}
