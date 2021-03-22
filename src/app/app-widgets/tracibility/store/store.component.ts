import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {fromEvent, Subscription} from 'rxjs';
import {DocumentListDataStore} from "../../../app-backend/data-stores/document-list-data-store";
import {TracibilityDataStore} from "../../../app-backend/data-stores/tracibility-data-store";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent implements OnInit {
  public columnDefs = [];
  public rowData = [];

  private $subscription: Subscription;
  private gridApi;
  private gridColumnApi;

  constructor(private routerr: Router, private tracibilityDataStore: TracibilityDataStore, private boService: BackOfficeService) {}

  ngOnInit() {
    this.boService.requestData(RequestTypes.processMeta,"T1_PROCESS_STATUS='0'");
    this.columnDefs = [
      { headerName: "Ref#", field: "PROCESS_ID", width: 300, cellClass: "text-center" },
      {
        headerName: "Process Name",
        field: "PROCESS_NAME",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Supplier",
        field: "SUPPLIER.supplierName",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Volume",
        field: "PROCESS_QUANTITY",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Process Created Date",
        field: "PROCESS_CREATED_DATE",
        width: 300,
        cellClass: "text-center",
      },
    ];
  
    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data=>{
      this.rowData = this.tracibilityDataStore.processArr;
    })
  }

  public rowClick(event: any) {
    this.routerr.navigateByUrl(`gts/Trace/process/detail/${event.data.PROCESS_ID}`);
  }
}
