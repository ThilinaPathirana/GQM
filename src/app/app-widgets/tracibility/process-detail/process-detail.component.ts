import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { fromEvent, Subscription } from 'rxjs';
import { TracibilityDataStore } from "../../../app-backend/data-stores/tracibility-data-store";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";
import { RequestTypes } from "../../../app-constants/enums/request-types.enum";

@Component({
  selector: "app-process-detail",
  templateUrl: "./process-detail.component.html",
  styleUrls: ["./process-detail.component.scss"],
})
export class ProcessDetailComponent implements OnInit {
  public columnDefs = [];
  public rowData = [];
  public totalVolume = '';
  public remainingVolume = '';
  private $subscription: Subscription;
  private gridApi;
  private gridColumnApi;
  private id;

  constructor(private routerr: Router, private tracibilityDataStore: TracibilityDataStore, private boService: BackOfficeService, private route: ActivatedRoute) {}

  addProcessSteps(): void {
    this.routerr.navigateByUrl("gts/Trace/process/steps");
  }

  rowClick(event: any) {
    this.routerr.navigateByUrl(
      `gts/Trace/process/step/detail/${event.data.id}`
    );
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.boService.requestData(RequestTypes.processStepMeta,`T1_PROCESS_ID=${this.id}`);
    this.columnDefs = [
      { headerName: "Ref#", field: "PS_ID", width: 300, cellClass: "text-center" },
      {
        headerName: "Step Description",
        field: "PS_PLACES_FROM.plasesName",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Process Status",
        field: "PS_QA_DECISION",
        width: 300,
        cellClass: "text-center",
      },
    ];

    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data=>{
      this.rowData = this.tracibilityDataStore.processStepArr;
    })
  }
}
