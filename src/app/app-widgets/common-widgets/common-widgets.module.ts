import { NgModule } from '@angular/core';
import { AgGridModule} from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component';
import { BaseCellRendereComponent } from './ag-grid-cell-renderes/base-cell-rendere/base-cell-rendere.component';
import { TrainingCellRendereComponent } from './ag-grid-cell-renderes/training-cell-rendere/training-cell-rendere.component';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';

// import { CustomHeaderComponent } from './ag-grid-table/custom-header/custom-header.component';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule,
    MatDialogModule,
  ],
  declarations: [AgGridTableComponent, BaseCellRendereComponent, TrainingCellRendereComponent, DialogPopupComponent],
  entryComponents: [
    DialogPopupComponent
  ],
  providers: [DialogPopupComponent]
})
export class CommonWidgetsModule { }
