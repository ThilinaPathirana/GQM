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

  constructor(private routerr: Router, private boService: BackOfficeService) { }

  register(): void {
    //this.routerr.navigateByUrl("gts/Trace/supplier");
    this.registrationData = {
      ITEM: this.itemName,
      ITEM_CODE: this.itemCode,
      ITEM_SPECIFICATION: this.itemSpec
    };

    this.boService.addItem(this.registrationData);
  }

  ngOnInit() {
  }

}
