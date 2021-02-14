import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {fromEvent, Subscription} from 'rxjs';
import {TracibilityDataStore} from "../../../app-backend/data-stores/tracibility-data-store";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public columnDefs = [];
  public rowData = [];
  private $subscription: Subscription;
  private gridApi;
  private gridColumnApi;


  constructor(private routerr: Router, private tracibilityDataStore: TracibilityDataStore, private boService: BackOfficeService) {}

  addProduct(): void {
    this.routerr.navigateByUrl("gts/Trace/item/add");
  }

  ngOnInit() {
    this.boService.requestData(RequestTypes.itemMeta,"");
    this.columnDefs = [
      { headerName: "Ref#", field: "ITEM_ID", width: 300, cellClass: "text-center" },
      {
        headerName: "Product Name",
        field: "ITEM",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Product Code",
        field: "ITEM_CODE",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Product Specification",
        field: "ITEM_SPECIFICATION",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Created Date",
        field: "ITEM_CREATED_DATE",
        width: 300,
        cellClass: "text-center",
      },
    ];

    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data=>{
      this.rowData = this.tracibilityDataStore.itemArr;
    })
    
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });
  }

}
