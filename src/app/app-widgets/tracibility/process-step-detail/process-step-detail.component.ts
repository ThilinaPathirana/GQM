import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-process-step-detail",
  templateUrl: "./process-step-detail.component.html",
  styleUrls: ["./process-step-detail.component.scss"],
})
export class ProcessStepDetailComponent implements OnInit {
  constructor(private routerr: Router) {}

  submit() {
    this.routerr.navigateByUrl("gts/Trace/process/detail");
  }

  ngOnInit() {}
}
