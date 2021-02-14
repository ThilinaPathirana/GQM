import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {fromEvent, Subscription} from 'rxjs';
import {DocumentListDataStore} from "../../../app-backend/data-stores/document-list-data-store";
import {TracibilityDataStore} from "../../../app-backend/data-stores/tracibility-data-store";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";

@Component({
  selector: 'app-supplier-products-list',
  templateUrl: './supplier-products-list.component.html',
  styleUrls: ['./supplier-products-list.component.css']
})
export class SupplierProductsListComponent implements OnInit {

  public rowData = [];
  public responseArr = [];
  @Input() columnDefs = [];
  @Input() tableType;
  private $subscription: Subscription;
  private gridApi;
  private gridColumnApi;

  constructor(private routerr: Router, private tracibilityDataStore: TracibilityDataStore, private boService: BackOfficeService,) {}

  addProduct(): void {
    this.routerr.navigateByUrl("gts/Trace/products/add");
  }

  ngOnInit() {
    this.boService.requestData(RequestTypes.productMeta,"");
    this.columnDefs = [
      { headerName: "Ref#", field: "ITEM_SUPPLIER_ID", width: 300, cellClass: "text-center" },
      {
        headerName: "Supplier Name",
        field: "SUPPLIER.supplierName",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Product Name",
        field: "ITEM.item",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Product Code",
        field: "ITEM.itemCode",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Product Specification",
        field: "ITEM.itemSpecification",
        width: 300,
        cellClass: "text-center",
      },
      {
        headerName: "Created Date",
        field: "ITEM_SUPPLIER_CREATED_DATE",
        width: 300,
        cellClass: "text-center",
      },
    ];
    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data=>{
      this.rowData = this.tracibilityDataStore.documentList;      
    })
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });
  }
  
}
