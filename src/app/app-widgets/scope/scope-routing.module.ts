import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkInstrMainLayoutComponent} from '../work-instr/work-instr-main-layout/work-instr-main-layout.component';
import {WorkInstrComponent} from '../work-instr/work-instr/work-instr.component';
import {WorkInstrDialogComponent} from '../work-instr/work-instr-dialog/work-instr-dialog.component';
import {Mgts1LayoutComponent} from './mgts1-layout/mgts1-layout.component';
import {Mgts1Component} from './mgts1/mgts1.component';


const routes: Routes = [
  {path: '', component: Mgts1LayoutComponent ,
    children: [
      {path: '', component: Mgts1Component, outlet: 'outlet1'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScopeRoutingModule { }
