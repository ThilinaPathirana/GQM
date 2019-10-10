import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MrmMeetingRoutingModule } from './mrm-meeting-routing.module';
import { AddMeetingRecordComponent } from './add-meeting-record/add-meeting-record.component';
import { MrmMeetingLayoutComponent } from './mrm-meeting-layout/mrm-meeting-layout.component';
import {FormsModule} from "@angular/forms";
// import {MultiSelectModule} from "@syncfusion/ej2-angular-dropdowns";

@NgModule({
  imports: [
    CommonModule,
    MrmMeetingRoutingModule,
    FormsModule,
    // MultiSelectModule,
  ],
  declarations: [AddMeetingRecordComponent, MrmMeetingLayoutComponent]
})
export class MrmMeetingModule { }
