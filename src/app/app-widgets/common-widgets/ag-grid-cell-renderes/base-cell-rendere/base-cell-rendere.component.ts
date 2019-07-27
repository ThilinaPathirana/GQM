import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid';

@Component({
  selector: 'app-base-cell-rendere',
  templateUrl: './base-cell-rendere.component.html',
  styleUrls: ['./base-cell-rendere.component.css']
})
export class BaseCellRendereComponent implements AgRendererComponent {

  public params: ICellRendererParams;
  // @Output() public notificationEmitter: EventEmitter<any> = new EventEmitter();

  public refresh(params: any): boolean {
    return this._refresh(params);
  }

  public agInit(params: ICellRendererParams): void {
    this.init(params);
  }

  public _refresh(params: any): boolean {
    return true;
  }

  public init(params: ICellRendererParams): void {
    this.params = params;
    return;
  }

  public onSelectMenuItem(item: any): void {
    this.params.context.componentParent.onSelectMenuItem(item, this.params.data);
  }


}
