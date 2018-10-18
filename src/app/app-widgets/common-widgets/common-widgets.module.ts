import { NgModule } from '@angular/core';
import { AgGridModule} from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component';
// import { CustomHeaderComponent } from './ag-grid-table/custom-header/custom-header.component';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule
  ],
  declarations: [AgGridTableComponent]
})
export class CommonWidgetsModule { }
