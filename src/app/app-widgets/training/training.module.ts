import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingFrontComponent } from './training-front/training-front.component';
import { TrainingLayoutComponent } from './training-layout/training-layout.component';
import { TrainingRoutingModule } from './training-routing.module';
import {AngularMaterialModule} from "../../app-modules/angular-material.module";
import {AgGridModule} from "ag-grid-angular";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import { TrainingChartComponent } from './training-chart/training-chart.component';
import {ChartModule} from "angular-highcharts";


@NgModule({
  imports: [
    CommonModule,
    TrainingRoutingModule,
    AngularMaterialModule,
    AgGridModule.withComponents([]),
    PerfectScrollbarModule,
    ChartModule,

  ],
  declarations: [TrainingFrontComponent, TrainingLayoutComponent, TrainingChartComponent],

  exports: [TrainingChartComponent],
  entryComponents: [TrainingChartComponent]
})
export class TrainingModule { }
