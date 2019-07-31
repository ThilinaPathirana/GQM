import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companin-handling',
  templateUrl: './companin-handling.component.html',
  styleUrls: ['./companin-handling.component.css']
})
export class CompaninHandlingComponent implements OnInit {

  public date;
  public preActDate;
  public communicationDate;
  public data: string[] = ['Mr. Sanath Perera', 'Mr. Gimhan Silva', 'Mr. Rashmika de Silva', 'Mr. Kusal Sanjeewa',];
  public placeHolder = "Names";
  public popupHeight:string = '200px';
  public popupWidth:string = '250px';

  public occurrance;
  public reportNo;

  public largeText = [{topic:"Details of Occurrance",value:null},{topic:"Quick fix",value:null},{topic:"Root Cause",value:null},{topic:"Corrective Action",value:null},]

  constructor() { }

  ngOnInit() {
  }

}
