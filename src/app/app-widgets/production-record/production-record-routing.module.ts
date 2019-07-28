import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductionRecordLayoutComponent} from "./production-record-layout/production-record-layout.component";
import {ProductionRecordComponent} from "./production-record/production-record.component";

const routes: Routes = [
  {path: '', component: ProductionRecordLayoutComponent ,
    children: [
      {path: '', component: ProductionRecordComponent, outlet: 'outlet1'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRecordRoutingModule { }
