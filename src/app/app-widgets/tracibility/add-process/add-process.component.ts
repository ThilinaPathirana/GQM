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
  public supplier:Number;
  public item:Number;
  public processName = "";
  public quantity = "";
  public suppliers = [];
  public items = [];
  public selectedSuppliers:Number;
  public selectedItems:Number;
  private $subscription: Subscription;

  public addProcessData = {};

  constructor(private routerr: Router, private boService: BackOfficeService, private tracibilityDataStore: TracibilityDataStore) {}

  addProcess() {
    this.addProcessData = {
      PROCESS_NAME: this.processName,
      SUPPLIER: {"SUPPLIER_ID":this.supplier},
      ITEM: {"ITEM_ID":this.item},
      PROCESS_QUANTITY: this.quantity,
    };

    this.boService.addProcess(this.addProcessData);
    this.routerr.navigateByUrl("gts/Trace/process");
  }

  selectedSupplier(event: any) {
    this.supplier = event; 
    this.boService.requestData(RequestTypes.productMeta, `T1_SUPPLIER_ID=${event}`)
    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data=>{
      this.items = this.tracibilityDataStore.documentList;
    });
  }

  selectedItem(event: any) {
    this.item = event; 
  }

  ngOnInit() {
    this.boService.requestData(RequestTypes.supplierMeta,"");
    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data=>{
      this.suppliers = this.tracibilityDataStore.supplierArr;
    });
  }
}
