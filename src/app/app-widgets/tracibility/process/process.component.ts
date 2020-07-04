import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-process",
  templateUrl: "./process.component.html",
  styleUrls: ["./process.component.scss"],
})
export class ProcessComponent implements OnInit {
  constructor(private routerr: Router) {}

  columnDefs = [
    { headerName: "Ref#", field: "ref", width: 300, cellClass: "text-center" },
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
      headerName: "Volume",
      field: "volume",
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
      processName: "System1",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
      volume: "10kg",
    },
    {
      id: 2,
      ref: "UN/2018/14",
      processName: "System2",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
      volume: "10kg",
    },
    {
      id: 3,
      ref: "UN/2018/14",
      processName: "System3",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
      volume: "10kg",
    },
    {
      id: 4,
      ref: "UN/2018/14",
      processName: "System4",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
      volume: "10kg",
    },
    {
      id: 5,
      ref: "UN/2018/14",
      processName: "System5",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
      volume: "10kg",
    },
  ];

  addProcess(): void {
    this.routerr.navigateByUrl("gts/Trace/process/add");
  }

  public rowClick(event: any) {
    console.log("row", event.data);
    this.routerr.navigateByUrl(`gts/Trace/process/detail/${event.data.id}`);
  }

  ngOnInit() {}
}
