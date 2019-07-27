import { Component, OnInit } from '@angular/core';
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";

@Component({
  selector: 'app-mgts1',
  templateUrl: './mgts1.component.html',
  styleUrls: ['./mgts1.component.css']
})
export class Mgts1Component implements OnInit {

  public system = '';
  public refNum = '';
  public companyName = '';
  public address = '';
  public contactPerson = '';
  public phone1 = '';
  public phone2 = '';
  public position = '';
  public resPerson = '';
  public resPhone = '';
  public resPosition = '';
  public product = '';
  public service = '';

  public addScopeData = {}

  constructor(
    private boService: BackOfficeService,
  ) { }

  ngOnInit() {
  }

  addButtonClick(): void{

    this.addScopeData = {
      REFERENCE_NO :this.refNum,
      SYSTEM: this.system,
      COMPANY_NAME: this.companyName,
      ADDRESS:this.address,
      CONTACT_PERSON: this.contactPerson,
      CONTACT_PERSON_POSITION: this.position,
      CONTACT_PERSON_PHONE_NO:this.phone1,
      RESPONSE_PERSON: this.resPerson,
      RESPONSE_PERSON_PHONE_NO:this.resPhone,
      RESPONSE_PERSON_POSITION: this.resPosition,
      PRODUCT:this.product,
      SERVICE:this.service
    };

    this.boService.addScope(this.addScopeData);


  }

}
