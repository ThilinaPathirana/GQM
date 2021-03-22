import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";
import { fromEvent, Subscription } from 'rxjs';
import { TracibilityDataStore } from "../../../app-backend/data-stores/tracibility-data-store";
import { RequestTypes } from "../../../app-constants/enums/request-types.enum";

@Component({
  selector: 'app-supplier-products',
  templateUrl: './supplier-products.component.html',
  styleUrls: ['./supplier-products.component.css']
})
export class SupplierProductsComponent implements OnInit {
  public supplier:Number;
  public product:Number;
  public annualSupply = "";
  public unit = "";
  public suppliers = [];
  public items = [];
  public selectedSuppliers:Number;
  public selectedProducts:Number;
  private $subscription: Subscription;

  public productObject = {};

  constructor(private routerr: Router, private boService: BackOfficeService, private tracibilityDataStore: TracibilityDataStore) { }

  register(): void {
    this.productObject = {
      SUPPLIER_ID: {"SUPPLIER_ID":this.supplier},
      ITEM_ID: {"ITEM_ID":this.product},
      ITEM_ANNUAL_SUPPLIY: this.annualSupply,
      UNIT: this.unit
    }
    
    this.boService.suppliersProduct(this.productObject);
  }

  ngOnInit() {
    this.boService.requestData(RequestTypes.supplierMeta,"");
    this.boService.requestData(RequestTypes.itemMeta,"");
    this.selectedSuppliers=1;

    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data=>{
      this.items = this.tracibilityDataStore.itemArr;
      this.suppliers = this.tracibilityDataStore.supplierArr;
    });  
  }

  selectedSupplier(event: any) {
    this.supplier = event; 
  }

  selectedProduct(event: any) {
    this.product = event;
  }
}
