import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-suppliers",
  templateUrl: "./suppliers.component.html",
  styleUrls: ["./suppliers.component.scss"],
})
export class SuppliersComponent implements OnInit {
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
      ref: "UN/2018/14",
      processName: "System1",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      ref: "UN/2018/14",
      processName: "System2",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      ref: "UN/2018/14",
      processName: "System3",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      ref: "UN/2018/14",
      processName: "System4",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
    {
      ref: "UN/2018/14",
      processName: "System5",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
    },
  ];

  addSupplier(): void {
    this.routerr.navigateByUrl("gts/Trace/supplier/regstration");
  }

  ngOnInit() {}
}
