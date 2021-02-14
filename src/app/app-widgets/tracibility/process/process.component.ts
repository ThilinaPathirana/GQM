import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {fromEvent, Subscription} from 'rxjs';
import {DocumentListDataStore} from "../../../app-backend/data-stores/document-list-data-store";
import {TracibilityDataStore} from "../../../app-backend/data-stores/tracibility-data-store";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";

@Component({
  selector: "app-process",
  templateUrl: "./process.component.html",
  styleUrls: ["./process.component.scss"],
})
export class ProcessComponent implements OnInit {

  public rowData = [];
  public responseArr = [];
  public columnDefs = [];
  public tableType;
  private $subscription: Subscription;
  private gridApi;
  private gridColumnApi;

  constructor(private routerr: Router, private tracibilityDataStore: TracibilityDataStore, private boService: BackOfficeService) {}

  addProcess(): void {
    this.routerr.navigateByUrl("gts/Trace/process/add");
  }

  public rowClick(event: any) {
    console.error("row", event.data);
    this.routerr.navigateByUrl(`gts/Trace/process/detail/${event.data.PROCESS_ID}`);
  }

  ngOnInit() {
    this.boService.requestData(RequestTypes.processMeta,"");
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
      console.error("rowData", this.rowData);
       
    })
  }
}
