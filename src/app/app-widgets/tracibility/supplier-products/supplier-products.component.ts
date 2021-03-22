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
  public supplier: Number;
  public product: Number;
  public annualSupply = "";
  public unit = "";
  public suppliers = [];
  public items = [];
  public selectedSuppliers: Number;
  public selectedProducts: Number;

  public allEmpty: Boolean;
  public supplierError: Boolean;
  public productError: Boolean;
  public annualSupplyError: Boolean;
  public unitError: Boolean;

  private $subscription: Subscription;

  public productObject = {};

  constructor(private routerr: Router, private boService: BackOfficeService, private tracibilityDataStore: TracibilityDataStore) { }

  validationForm(data) {
    let errors = false;
    if (!data.SUPPLIER_ID) {
      this.supplierError = true;
      errors = true;
    } else if (!data.ITEM_ID) {
      this.productError = true;
      errors = true;
    } else if (!data.ITEM_ANNUAL_SUPPLIY) {
      this.annualSupplyError = true;
      errors = true;
    } else if (!data.UNIT) {
      this.unitError = true;
      errors = true;
    } else {
      errors = false;
    }

    return errors;
  }

  register(): void {
    if (!this.supplier || !this.product || !this.annualSupply || !this.unit) {
      this.allEmpty = true;
    }

    this.productObject = {
      SUPPLIER_ID: { "SUPPLIER_ID": this.supplier },
      ITEM_ID: { "ITEM_ID": this.product },
      ITEM_ANNUAL_SUPPLIY: this.annualSupply,
      UNIT: this.unit
    }

    setTimeout(() => {
      this.supplierError = false;
      this.productError = false;
      this.annualSupplyError = false;
      this.unitError = false;
      this.allEmpty = false;
    }, 3000)

    let responseError = this.validationForm(this.productObject);

    if (!responseError) {
      this.boService.suppliersProduct(this.productObject);
    }
  }

  ngOnInit() {
    this.boService.requestData(RequestTypes.supplierMeta, "");
    this.boService.requestData(RequestTypes.itemMeta, "");
    this.selectedSuppliers = 1;

    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data => {
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
