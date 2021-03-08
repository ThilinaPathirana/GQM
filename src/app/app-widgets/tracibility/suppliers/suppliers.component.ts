import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { fromEvent, Subscription } from 'rxjs';
import { TracibilityDataStore } from "../../../app-backend/data-stores/tracibility-data-store";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";
import { RequestTypes } from "../../../app-constants/enums/request-types.enum";

@Component({ 
  selector: "app-suppliers",
  templateUrl: "./suppliers.component.html",
  styleUrls: ["./suppliers.component.scss"],
})
export class SuppliersComponent implements OnInit {

  public columnDefs = [];
  public rowData = [];
  private $subscription: Subscription;
  private gridApi;
  private gridColumnApi;

  constructor(private routerr: Router, private tracibilityDataStore: TracibilityDataStore, private boService: BackOfficeService) {}


  addSupplier(): void {
    this.routerr.navigateByUrl("gts/Trace/supplier/regstration");
  }

  ngOnInit() {
    this.boService.requestData(RequestTypes.supplierMeta,"");
    this.columnDefs = [
      { headerName: "Ref#", field: "SUPPLIER_ID", width: 300, cellClass: "text-center" },
      {
        headerName: "Supplier Name",
        field: "SUPPLIER_NAME",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Supplier Code",
        field: "SUPPLIER_CODE",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Contact Info.",
        field: "SUPPLIER_CONTACT_INFO",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Address",
        field: "SUPPLIER_ADDRESS",
        width: 300,
        cellClass: "text-center"
      }
    ];

    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data=>{
      this.rowData = this.tracibilityDataStore.supplierArr;
    })
  }
}
