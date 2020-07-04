import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";

@Component({
  selector: "app-add-process-steps",
  templateUrl: "./add-process-steps.component.html",
  styleUrls: ["./add-process-steps.component.css"],
})
export class AddProcessStepsComponent implements OnInit {
  public place = "";
  public from = "";
  public to = "";
  public activity = "";
  public desicion = "";
  public doneBy = "";
  public approvedBy = "";
  public conversionRate = "";
  public comment = "";
  public psCode = "";

  public addProcessStep = {};

  constructor(private routerr: Router, private boService: BackOfficeService) {}

  addStep() {
    this.addProcessStep = {
      place: this.place,
      from: this.from,
      to: this.to,
      activity: this.activity,
      nextStep: this.desicion,
      doneBy: this.doneBy,
      approvedBy: this.approvedBy,
      conversionRate: this.conversionRate,
      comment: this.comment,
      psCode: this.psCode,
    };

    this.boService.addProcessStep(this.addProcessStep);

    this.routerr.navigateByUrl("gts/Trace/process/detail");
  }

  ngOnInit() {}
}
