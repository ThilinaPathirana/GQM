import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";

@Component({
  selector: "app-supplier-registration",
  templateUrl: "./supplier-registration.component.html",
  styleUrls: ["./supplier-registration.component.css"],
})
export class SupplierRegistrationComponent implements OnInit {
  public supplierName = "";
  public supplierCode = "";
  public contactInfo = "";
  public item = "";
  public annual = "";
  public unit = "";
  public code = "";
  public address = "";
  public specification = "";
  public remark = "";

  public registrationData = {};

  constructor(private routerr: Router, private boService: BackOfficeService) {}

  register(): void {
    // console.log("event", this.supplierName);

    //this.routerr.navigateByUrl("gts/Trace/supplier");
    this.registrationData = {
      supplierName: this.supplierName,
      supplierCode: this.supplierCode,
      contactInfo: this.contactInfo,
      item: this.item,
      annual: this.annual,
      unit: this.unit,
      code: this.code,
      address: this.address,
      specification: this.specification,
      remark: this.remark,
    };

    this.boService.supplierRegistration(this.registrationData);

    console.log("data", this.registrationData);
  }

  ngOnInit() {}
}
