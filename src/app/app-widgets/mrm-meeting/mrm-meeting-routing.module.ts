import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Mgts1LayoutComponent} from "../scope/mgts1-layout/mgts1-layout.component";
import {Mgts1Component} from "../scope/mgts1/mgts1.component";
import {MrmMeetingLayoutComponent} from "./mrm-meeting-layout/mrm-meeting-layout.component";
import {AddMeetingRecordComponent} from "./add-meeting-record/add-meeting-record.component";

const routes: Routes = [

  {path: 'AddMeetingRecord', component: MrmMeetingLayoutComponent ,
    children: [
      {path: '', component: AddMeetingRecordComponent, outlet: 'outlet1'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MrmMeetingRoutingModule { }
