import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent implements OnInit {
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
    },
    {
      id: 2,
      ref: "UN/2018/14",
      processName: "System2",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      id: 3,
      ref: "UN/2018/14",
      processName: "System3",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      id: 4,
      ref: "UN/2018/14",
      processName: "System4",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      id: 5,
      ref: "UN/2018/14",
      processName: "System5",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
  ];

  ngOnInit() {}

  public rowClick(event: any) {
    console.log("row", event.data);
    this.routerr.navigateByUrl(`gts/Trace/process/detail/${event.data.id}`);
  }
}
