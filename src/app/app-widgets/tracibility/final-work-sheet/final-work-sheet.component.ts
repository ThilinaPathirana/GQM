import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";

@Component({
  selector: "app-final-work-sheet",
  templateUrl: "./final-work-sheet.component.html",
  styleUrls: ["./final-work-sheet.component.css"],
})
export class FinalWorkSheetComponent implements OnInit {
  public selectStore = "";

  public labelData = {};

  constructor(private routerr: Router, private boService: BackOfficeService) {}

  ngOnInit() {}

  label() {
    this.labelData = {
      id: this.selectStore,
    };

    this.boService.label(this.label);

    this.routerr.navigateByUrl("gts/Trace/worksheet");
  }
}
