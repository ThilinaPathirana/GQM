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

  public supplierNameError: Boolean;
  public supplierCodeError: Boolean;
  public contactInfoError: Boolean;
  public addressError: Boolean;
  public remarkError: Boolean;
  public allEmpty: Boolean;

  public registrationData = {};

  constructor(private routerr: Router, private boService: BackOfficeService) { }

  validationForm(data) {
    let error = false;
    if (!data.SUPPLIER_NAME) {
      this.supplierNameError = true;
      error = true;
    } else if (!data.SUPPLIER_CODE) {
      this.supplierCodeError = true;
      error = true;
    } else if (!data.SUPPLIER_CONTACT_INFO) {
      this.contactInfoError = true;
      error = true;
    } else if (!data.SUPPLIER_ADDRESS) {
      this.addressError = true;
      error = true;
    } else if (!data.REMARKS) {
      this.remarkError = true;
      error = true;
    } else {
      error = false;
    }

    return error;
  }

  register() {
    if (!this.supplierName ||
      !this.supplierCode ||
      !this.contactInfo ||
      !this.address ||
      !this.remark) {
      this.allEmpty = true;
    }
    this.registrationData = {
      SUPPLIER_NAME: this.supplierName,
      SUPPLIER_CODE: this.supplierCode,
      SUPPLIER_CONTACT_INFO: this.contactInfo,
      SUPPLIER_ADDRESS: this.address,
      REMARKS: this.remark,
    };

    let errorResponse = this.validationForm(this.registrationData);

    setTimeout(() => {
      this.supplierNameError = false;
      this.supplierCodeError = false;
      this.contactInfoError = false;
      this.addressError = false;
      this.remarkError = false;
      this.allEmpty = false;
    }, 3000);

    if (!errorResponse) {
      this.boService.supplierRegistration(this.registrationData);
    }
  }

  ngOnInit() { }
}
