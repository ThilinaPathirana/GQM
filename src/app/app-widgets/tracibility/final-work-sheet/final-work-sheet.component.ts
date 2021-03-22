import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { fromEvent, Subscription } from 'rxjs';
import { TracibilityDataStore } from "../../../app-backend/data-stores/tracibility-data-store";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";
import { RequestTypes } from "../../../app-constants/enums/request-types.enum";

@Component({
  selector: "app-final-work-sheet",
  templateUrl: "./final-work-sheet.component.html",
  styleUrls: ["./final-work-sheet.component.css"],
})
export class FinalWorkSheetComponent implements OnInit {
  public store: Number;
  public selectedPlace: Number;
  public isLast: boolean;
  public rowData = [];
  public linkLists = [];

  public allEmpty: Boolean;

  private $subscription: Subscription;

  public labelData = {};

  constructor(private routerr: Router, private tracibilityDataStore: TracibilityDataStore, private boService: BackOfficeService) {
    this.isLast = false;
  }

  selectedFromValue(event: any) {
    this.store = event;
    this.processData(event);
  }

  processData(data) {
    this.boService.requestData(RequestTypes.processMeta, `T1_STORE_ID=${data}`);
    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data => {
      this.rowData = this.tracibilityDataStore.processArr;
      this.isLast = this.rowData.length > 0 ? true : false;
      this.listProcessedData(this.rowData);
    })
  }

  listProcessedData(data) {
    var newArr = [];
    data.forEach(element => {
      var obj = {
        PROCESS_NAME: element.PROCESS_NAME,
        BATCH_CODE: element.BATCH_CODE
      }
      newArr.push(obj);
    });
    this.linkLists = newArr;
  }

  ngOnInit() { }

  label() {
    if (!this.store) {
      this.allEmpty = true;
    } else {
      this.labelData = {
        "SUPPLIER": {
          "SUPPLIER_ID": 0
        },
        "ITEM": {
          "ITEM_ID": 0
        },
        "STORE_ID": this.store
      };

      this.boService.label(this.label);
      this.routerr.navigateByUrl("gts/Trace/worksheet");
    }
  }
}
