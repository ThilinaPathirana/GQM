import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-worksheet",
  templateUrl: "./worksheet.component.html",
  styleUrls: ["./worksheet.component.scss"],
})
export class WorksheetComponent implements OnInit {
  constructor(private routerr: Router) {}

  columnDefs = [
    {
      headerName: "Batch Code",
      field: "batchCode",
      width: 300,
      cellClass: "text-center",
    },
    {
      headerName: "Process Name",
      field: "processName",
      width: 300,
      cellClass: "text-center",
    },
    {
      headerName: "Supplier",
      field: "supplier",
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
      batchCode: "UN/2018/14",
      processName: "System1",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      id: 2,
      batchCode: "UN/2018/14",
      processName: "System2",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      id: 3,
      batchCode: "UN/2018/14",
      processName: "System3",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      id: 4,
      batchCode: "UN/2018/14",
      processName: "System4",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      id: 5,
      batchCode: "UN/2018/14",
      processName: "System5",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
  ];

  finalStore(): void {
    this.routerr.navigateByUrl("gts/Trace/final-store");
  }

  labelling(): void {
    this.routerr.navigateByUrl("gts/Trace/final");
  }

  public rowClick(event: any) {
    this.routerr.navigateByUrl(`gts/Trace/work-sheet/detail/${event.data.id}`);
  }

  ngOnInit() {}
}
