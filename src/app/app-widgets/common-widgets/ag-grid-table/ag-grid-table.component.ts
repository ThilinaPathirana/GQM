import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  EventEmitter,
  Injector,
  Input,
  NgZone,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ColumnApi, GridApi, GridOptions } from 'ag-grid/main';
// import {CustomHeaderComponent} from './custom-header/custom-header.component';

const DEFAULT_VIEW_UPDATE_INTERVAL = 300;
const DEFAULT_ROW_HEIGHT = 25;
const DEFAULT_HEADER_HEIGHT = 35;
const TIMEOUT = 10;
const GRID_READY = 500;

export interface ColumnDef {
  headerName: String;
  field: string;
  width?: number;
  pinned?: number;
}

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrls: ['./ag-grid-table.component.css']
})

export class AgGridTableComponent implements OnInit, OnChanges {
  @Input() public rowData: Array<any> = [];
  @Input() public columnDefs: Array<ColumnDef> = [];
  @Input() public gridOptions = <GridOptions>{};
  @Input() public icons = {};
  @Input() public key: string;
  @Input() public height: string;
  @Input() public autoWidth = false;
  @Input() public rowHeight = DEFAULT_ROW_HEIGHT;
  @Input() public headerRowHeight = DEFAULT_HEADER_HEIGHT;
  @Input() public impureGridRefresh = true;
  @Input() public viewUpdateInterval = DEFAULT_VIEW_UPDATE_INTERVAL;
  @Input() public suppressDragLeaveHidesColumns = true;
  @Input() public enableSorting = true;
  @Output() public rowClicked = new EventEmitter();
  @Output() public dragStopped = new EventEmitter();
  @Output() public cellRightClicked = new EventEmitter();
  @Output() public sortChanged: EventEmitter<Array<{colId: string, sort: string}>> = new EventEmitter();
  public deltaRowDataMode = false;
  public getRowNodeId;
  public frameworkComponents;
  public enableRtl;
  private impureRefreshTimer;
  private timeout = false;
  private keysToUpdate = [];
  private api: GridApi;
  private columnApi: ColumnApi;
  private sortModelToAdd;

  constructor(private _ngZone: NgZone) {
   //  this.frameworkComponents = { agColumnHeader: CustomHeaderComponent };
  }

  public ngOnInit() {
    if (this.key) {
      const self = this;
      this.deltaRowDataMode = true;
      this.getRowNodeId = function(data: any): string | number {
        return data[self.key];
      };
    }
  }

  public ngOnChanges(changes: SimpleChanges) {

    if (changes['rowHeight'] && this.api) {
      setTimeout(() => {
        this.api.resetRowHeights();
      }, TIMEOUT);
    }

  }

  public onReady(params: any): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
    // this.api.setRowData(this.rowData);
    if (this.sortModelToAdd) {
      this.api.setSortModel(this.sortModelToAdd);
      this.sortModelToAdd = null;
    }
    if (this.impureGridRefresh) {
      this.initiateViewUpdate();
    }

    // this.updateGridSize(params);
  }

  public updateGridSize(params: any): void {
    if (this.autoWidth) {
      params.api.sizeColumnsToFit();
    }
  }

  public moveStopped(params: any): void {
    this.dragStopped.emit(params);
  }

  // public updateRows(rows: Array<StockEntity>): void {
  //   if (this.api) {
  //     this.api.updateRowData({ add: rows });
  //   }
  // }

  public onRowClicked(event: any): void {
    this.rowClicked.emit(event);
  }

  public cellContextMenu(event: any): void {
    this.cellRightClicked.emit(event);
  }

  public setRowData(): void {
    if (this.api) {
      this.api.setRowData(this.rowData);
    }
  }

  public setSortModel(model: any): void {
    setTimeout(() => {
      if (this.api) {
        this.api.setSortModel(model);
        this.sortModelToAdd = null;
      } else {
        this.sortModelToAdd = model;
      }
    }, GRID_READY);
  }

  public onSortChanged(params: any): void {
    this.sortChanged.emit(this.api.getSortModel());
  }

  private initiateViewUpdate(): void {
    this.impureRefreshTimer = setInterval(() => {
      this.api.refreshCells({ force: false });
      this.api.refreshClientSideRowModel('sort'); // change this to 'filer' if required
    }, this.viewUpdateInterval);
  }

  public onDestroy(): void {
    if (this.impureRefreshTimer) {
      clearInterval(this.impureRefreshTimer);
    }
  }

}
