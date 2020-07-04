import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-process-detail",
  templateUrl: "./process-detail.component.html",
  styleUrls: ["./process-detail.component.scss"],
})
export class ProcessDetailComponent implements OnInit {
  constructor(private routerr: Router, private route: ActivatedRoute) {}

  columnDefs = [
    { headerName: "Ref#", field: "ref", width: 300, cellClass: "text-center" },
    {
      headerName: "Step Description",
      field: "description",
      width: 300,
      cellClass: "text-center",
    },
    {
      headerName: "Process Status",
      field: "processStatus",
      width: 300,
      cellClass: "text-center",
    },
  ];

  rowData = [
    {
      id: 1,
      ref: "UN/2018/14",
      description: "GRN",
      processStatus: "Done",
    },
    {
      id: 2,
      ref: "UN/2018/14",
      description: "GON",
      processStatus: "Done",
    },
    {
      id: 3,
      ref: "UN/2018/14",
      description: "Step 1",
      processStatus: "Done",
    },
    {
      id: 4,
      ref: "UN/2018/14",
      description: "Step 2",
      processStatus: "Done",
    },
    {
      id: 5,
      ref: "UN/2018/14",
      description: "Step 3",
      processStatus: "Done",
    },
  ];

  addProcessSteps(): void {
    this.routerr.navigateByUrl("gts/Trace/process/steps");
  }

  rowClick(event: any) {
    this.routerr.navigateByUrl(
      `gts/Trace/process/step/detail/${event.data.id}`
    );
  }

  ngOnInit() {}
}
