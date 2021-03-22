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
      SUPPLIER_NAME: this.supplierName,
      SUPPLIER_CODE: this.supplierCode,
      SUPPLIER_CONTACT_INFO: this.contactInfo,
      SUPPLIER_ADDRESS: this.address,
      REMARKS: this.remark,
    };

    this.boService.supplierRegistration(this.registrationData);
  }

  ngOnInit() {}
}
