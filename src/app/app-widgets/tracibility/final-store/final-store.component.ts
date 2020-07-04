import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-final-store",
  templateUrl: "./final-store.component.html",
  styleUrls: ["./final-store.component.css"],
})
export class FinalStoreComponent implements OnInit {
  constructor() {}

  columnDefs = [
    {
      headerName: "Ref#",
      field: "ref",
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
    {
      headerName: "Store Id",
      field: "storeId",
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

  rowData = [
    {
      ref: "UN/2018/14",
      processName: "System1",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
      storeId: 1,
    },
    {
      ref: "UN/2018/14",
      processName: "System2",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
      storeId: 1,
    },
    {
      ref: "UN/2018/14",
      processName: "System3",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
      storeId: 1,
    },
    {
      ref: "UN/2018/14",
      processName: "System4",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
      storeId: 1,
    },
    {
      ref: "UN/2018/14",
      processName: "System5",
      supplier: "ktslanka(pvt)Ltd",
      processStatus: "Done",
      storeId: 1,
    },
  ];

  ngOnInit() {}
}
