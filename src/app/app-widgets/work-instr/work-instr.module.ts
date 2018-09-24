import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkInstrComponent } from './work-instr/work-instr.component';
import { AngularMaterialModule } from '../../app-modules/angular-material.module';
import { WorkInstrRoutingModule } from './work-instr-routing.module';
import { WorkInstrMainLayoutComponent } from './work-instr-main-layout/work-instr-main-layout.component';
import { WorkInstrDialogComponent } from './work-instr-dialog/work-instr-dialog.component';

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    WorkInstrRoutingModule
  ],
  declarations: [WorkInstrComponent, WorkInstrMainLayoutComponent, WorkInstrDialogComponent]
})
export class WorkInstrModule { }
