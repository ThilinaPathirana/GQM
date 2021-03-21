import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";
import { fromEvent, Subscription } from 'rxjs';
import { TracibilityDataStore } from "../../../app-backend/data-stores/tracibility-data-store";
import { RequestTypes } from "../../../app-constants/enums/request-types.enum";

@Component({
  selector: "app-add-process",
  templateUrl: "./add-process.component.html",
  styleUrls: ["./add-process.component.css"],
})
export class AddProcessComponent implements OnInit {
  public supplier: Number;
  public item: Number;
  public processName = "";
  public quantity = "";
  public suppliers = [];
  public items = [];
  public selectedSuppliers: Number;
  public selectedItems: Number;
  public processNameError: Boolean;
  public quantityError: Boolean;
  public suppliersError: Boolean;
  public itemsError: Boolean;
  public disableSubmitButton: Boolean;
  public allEmpty: Boolean;
  private $subscription: Subscription;

  public addProcessData = {};

  constructor(private routerr: Router, private boService: BackOfficeService, private tracibilityDataStore: TracibilityDataStore) { }

  validateForm(data) {
    let errors = false;
    if (data.PROCESS_NAME == '') {
      this.processNameError = true;
      errors = true;
    } else if (data.SUPPLIER == '') {
      this.suppliersError = true;
      errors = true;
    } else if (data.ITEM == '') {
      this.itemsError = true;
      errors = true;
    } else if (data.PROCESS_QUANTITY == '') {
      this.quantityError = true;
      errors = true;
    } else {
      errors = false;
    }

    return errors;
  }

  addProcess() {
    if (!this.processName || !this.quantity || !this.supplier || !this.item) {
      this.allEmpty = true;
      return false;
    }
    this.addProcessData = {
      PROCESS_NAME: this.processName,
      SUPPLIER: { "SUPPLIER_ID": this.supplier },
      ITEM: { "ITEM_ID": this.item },
      PROCESS_QUANTITY: this.quantity,
    };

    let errorResponse = this.validateForm(this.addProcessData)
    setTimeout(() => {
      this.processNameError = false;
      this.quantityError = false;
      this.suppliersError = false;
      this.itemsError = false;
      this.allEmpty = false;
    }, 3000)
    if (errorResponse == false) {
      this.boService.addProcess(this.addProcessData);
      this.routerr.navigateByUrl("gts/Trace/process");
    } else {
      this.disableSubmitButton = true;
    }
  }

  selectedSupplier(event: any) {
    this.supplier = event;
    this.boService.requestData(RequestTypes.productMeta, `T1_SUPPLIER_ID=${event}`)
    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data => {
      this.items = this.tracibilityDataStore.documentList;
    });
  }

  selectedItem(event: any) {
    this.item = event;
  }

  ngOnInit() {
    this.boService.requestData(RequestTypes.supplierMeta, "");
    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data => {
      this.suppliers = this.tracibilityDataStore.supplierArr;
    });
  }
}
