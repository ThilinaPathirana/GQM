import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {fromEvent, Subscription} from 'rxjs';
import {DocumentListDataStore} from "../../../app-backend/data-stores/document-list-data-store";
import {TracibilityDataStore} from "../../../app-backend/data-stores/tracibility-data-store";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";

@Component({
  selector: "app-final-store",
  templateUrl: "./final-store.component.html",
  styleUrls: ["./final-store.component.css"],
})
export class FinalStoreComponent implements OnInit {
  public rowData = [];
  public responseArr = [];
  public columnDefs = [];
  public tableType;
  private $subscription: Subscription;
  private gridApi;
  private gridColumnApi;

  constructor(private routerr: Router, private tracibilityDataStore: TracibilityDataStore, private boService: BackOfficeService) {}

  ngOnInit() {
    this.boService.requestData(RequestTypes.processMeta,"T1_PROCESS_STATUS='1'");
    this.columnDefs = [
      {
        headerName: "Batch Code#",
        field: "BATCH_CODE",
        width: 300,
        cellClass: "text-center",
      },
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
        headerName: "Process Status",
        field: "PROCESS_STATUS",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Store Id",
        field: "STORE_ID",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Labelling",
        field: "labelling",
        width: 300,
        cellClass: "text-center",
        button: true,
      },
    ];

    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data=>{
      this.rowData = this.tracibilityDataStore.processArr; 
    })
  }
}
