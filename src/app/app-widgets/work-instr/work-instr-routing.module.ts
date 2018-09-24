import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkInstrComponent } from './work-instr/work-instr.component';
import {MenuItemComponent} from '../home-page-widgets/menu-item/menu-item.component';
import { WorkInstrMainLayoutComponent } from './work-instr-main-layout/work-instr-main-layout.component';
import {WorkInstrDialogComponent} from './work-instr-dialog/work-instr-dialog.component';

const routes: Routes = [
  {path: '', component: WorkInstrMainLayoutComponent,
    children: [
      {path: '', component: WorkInstrComponent, outlet: 'outlet1'},
      {path: '', component: WorkInstrDialogComponent, outlet: 'outlet2'},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkInstrRoutingModule {



}
