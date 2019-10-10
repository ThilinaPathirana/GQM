import { Component, OnInit } from '@angular/core';
import {DocumentContentType} from "aws-sdk/clients/workdocs";
import {DocumentControlType} from "../../../app-constants/enums/document-control-type.enum";
import {BackOfficeService} from "../../../app-backend/bo/back-office.service";
import {RequestTypes} from "../../../app-constants/enums/request-types.enum";


@Component({
  selector: 'app-top-level-manuals',
  templateUrl: './top-level-manuals.component.html',
  styleUrls: ['./top-level-manuals.component.css']
})
export class TopLevelManualsComponent implements OnInit {


  public rowData = [];
  public columnDefs = [];
  public tableType = DocumentControlType.TopLevelManuals

  constructor(
    private boService: BackOfficeService,
  ) { }

  ngOnInit() {

    this.boService.requestData(RequestTypes.documentMeta,null);



  }

}
