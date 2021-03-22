import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { fromEvent, Subscription } from 'rxjs';
import { TracibilityDataStore } from "../../../app-backend/data-stores/tracibility-data-store";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";
import { RequestTypes } from "../../../app-constants/enums/request-types.enum";
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: "app-add-process-steps",
  templateUrl: "./add-process-steps.component.html",
  styleUrls: ["./add-process-steps.component.css"],
})
export class AddProcessStepsComponent implements OnInit {
  public place: Number;
  public from: Number;
  public to: Number;
  public store: Number;
  public activity = "";
  public decision = "";
  public doneBy = "";
  public approvedBy = "";
  public conversionRate = "";
  public comment = "";
  public psCode = "";
  public isLast: boolean;

  public placeError: boolean;
  public fromError: boolean;
  public toError: boolean;
  public storeError: boolean;
  public activityError: boolean;
  public decisionError: boolean;
  public doneByError: boolean;
  public approvedByError: boolean;
  public conversionRateError: boolean;
  public commentError: boolean;
  public psCodeError: boolean;
  public allEmpty: boolean;

  private $subscription: Subscription;
  private gridApi;
  private gridColumnApi;

  public selectedPlace: Number;
  public selectedFrom: Number;
  public selectedTo: Number;

  public places = [];
  public fromPlaces = [];
  public addProcessStep = {};

  private lastPlace: Number;

  constructor(private routerr: Router, private tracibilityDataStore: TracibilityDataStore, private boService: BackOfficeService) {
    this.isLast = false;
  }

  validateForm(data) {
    let errors = false;
    if (data.PS_PROCESS) {
    } else if (data.PS_PLACES) {
      this.placeError = true;
      errors = true;
    } else if (data.PS_PLACES_FROM) {
      this.fromError = true;
      errors = true;
    } else if (data.PS_PLACES_TO) {
      this.toError = true;
      errors = true;
    } else if (data.PS_DONE_BY) {
      this.doneByError = true;
      errors = true;
    } else if (data.PS_QA_DECISION) {
      this.decisionError = true;
      errors = true;
    } else if (data.PS_ACTIVITY) {
      this.activityError = true;
      errors = true;
    } else if (data.PS_APPROVED_BY) {
      this.approvedByError = true;
      errors = true;
    } else if (data.PS_CONVERSION_RATE) {
      this.conversionRateError = true;
      errors = true;
    } else if (data.PS_COMMENT) {
      this.commentError = true;
      errors = true;
    } else if (data.PS_CODE) {
      // this.psCodeError = true;
      // errors = true;
    } else {
      errors = false;
    }

    return ErrorStateMatcher;
  }

  addStep() {

    if (!this.place ||
      !this.from ||
      !this.to ||
      !this.store ||
      !this.activity ||
      !this.decision ||
      !this.doneBy ||
      !this.approvedBy ||
      !this.conversionRate ||
      !this.comment) {
      this.allEmpty = true;
      return false;
    }

    this.addProcessStep = {
      PS_PROCESS: { "PROCESS_ID": 1 },
      PS_PLACES: { "PLACES_ID": this.place },
      PS_PLACES_FROM: { "PLACES_ID": this.from },
      PS_PLACES_TO: { "PLACES_ID": this.to },
      PS_ACTIVITY: this.activity,
      PS_QA_DECISION: this.decision,
      PS_DONE_BY: this.doneBy,
      PS_APPROVED_BY: this.approvedBy,
      PS_CONVERSION_RATE: this.conversionRate,
      PS_COMMENT: this.comment,
      PS_CODE: this.psCode,
      STORE_ID: this.isLast ? "1" : "0"
    };

    let errorResponse = this.validateForm(this.addProcessStep)
    setTimeout(() => {
      this.placeError = false;
      this.fromError = false;
      this.toError = false;
      this.storeError = false;
      this.activityError = false;
      this.decisionError = false;
      this.doneByError = false;
      this.approvedByError = false;
      this.conversionRateError = false;
      this.commentError = false;
      this.psCodeError = false;
      this.allEmpty = false;
    }, 3000)

    if (!errorResponse) {
      this.boService.addProcessStep(this.addProcessStep);

      this.routerr.navigateByUrl("gts/Trace/process/detail");
    }
  }

  selectedPlaces(event: any) {
    this.place = event;
  }

  selectedFromValue(event: any) {
    this.from = event;
  }

  selectedToValue(event: any) {
    if (event == this.lastPlace) {
      this.isLast = true;
    }
    this.to = event;
  }

  arrayToFrom(data: any) {
    var newArr = data;
    newArr.pop();
    this.fromPlaces = data;
  }


  ngOnInit() {
    this.boService.requestData(RequestTypes.placesMeta, "");
    this.$subscription = this.tracibilityDataStore.docListDataStoreUpdate$.subscribe(data => {
      this.places = this.tracibilityDataStore.placesArr;
      var lastElement = this.places[this.places.length - 1];
      this.lastPlace = lastElement.PLACES_ID;
      var newArr = this.tracibilityDataStore.placesArr;
      this.arrayToFrom(newArr);
    })
  }
}
