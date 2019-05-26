import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingFrontComponent } from './training-front/training-front.component';
import { TrainingLayoutComponent } from './training-layout/training-layout.component';
import { TrainingRoutingModule } from './training-routing.module';
import {AngularMaterialModule} from "../../app-modules/angular-material.module";
import {AgGridModule} from "ag-grid-angular";

@NgModule({
  imports: [
    CommonModule,
    TrainingRoutingModule,
    AngularMaterialModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [TrainingFrontComponent, TrainingLayoutComponent]
})
export class TrainingModule { }
