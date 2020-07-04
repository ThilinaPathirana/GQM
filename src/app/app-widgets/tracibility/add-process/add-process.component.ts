import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";

@Component({
  selector: "app-add-process",
  templateUrl: "./add-process.component.html",
  styleUrls: ["./add-process.component.css"],
})
export class AddProcessComponent implements OnInit {
  public processName = "";
  public supplier = "";
  public quantity = "";

  public addProcessData = {};

  constructor(private routerr: Router, private boService: BackOfficeService) {}

  addProcess() {
    this.addProcessData = {
      processName: this.processName,
      supplier: this.supplier,
      quantity: this.quantity,
    };

    this.boService.addProcess(this.addProcessData);

    console.log("process", this.addProcessData);

    this.routerr.navigateByUrl("gts/Trace/process");
  }

  ngOnInit() {}
}
