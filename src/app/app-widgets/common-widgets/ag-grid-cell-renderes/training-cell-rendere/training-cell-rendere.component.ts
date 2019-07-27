import { Component, OnInit } from '@angular/core';
import {BaseCellRendereComponent} from "../base-cell-rendere/base-cell-rendere.component";
import { ICellRendererParams } from 'ag-grid';

@Component({
  selector: 'app-training-cell-rendere',
  templateUrl: './training-cell-rendere.component.html',
  styleUrls: ['./training-cell-rendere.component.css']
})
export class TrainingCellRendereComponent extends BaseCellRendereComponent{

  public params;
  public achieve;

  public init(params: ICellRendererParams): void {
    this.params = params;
    this.achieve = params.data;
  }

}
