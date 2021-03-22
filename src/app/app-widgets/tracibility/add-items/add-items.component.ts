import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BackOfficeService } from "../../../app-backend/bo/back-office.service";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  public itemName = "";
  public itemCode = "";
  public itemSpec = "";
  public registrationData = {};

  public itemNameError: Boolean;
  public itemCodeError: Boolean;
  public itemSpecError: Boolean;
  public allEmpty: Boolean;

  constructor(private routerr: Router, private boService: BackOfficeService) { }

  validationForm(data) {
    let error = false;
    if (!data.ITEM) {
      this.itemNameError = true;
      error = true;
    } else if (!data.ITEM_CODE) {
      this.itemCodeError = true;
      error = true;
    } else if (!data.ITEM_SPECIFICATION) {
      this.itemSpecError = true;
      error = true;
    } else {
      error = false;
    }
    return error;
  }

  register(): void {
    //this.routerr.navigateByUrl("gts/Trace/supplier");

    if (!this.itemName ||
      !this.itemCode ||
      !this.itemSpec) {
      this.allEmpty = true;
    }

    this.registrationData = {
      ITEM: this.itemName,
      ITEM_CODE: this.itemCode,
      ITEM_SPECIFICATION: this.itemSpec
    };

    let responseError = this.validationForm(this.registrationData);
    setTimeout(() => {
      this.itemNameError = false;
      this.itemCodeError = false;
      this.itemSpecError = false;
      this.allEmpty = false;
    }, 3000)

    if (!responseError)
      this.boService.addItem(this.registrationData);
  }

  ngOnInit() {
  }

}
