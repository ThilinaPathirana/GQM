import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentComplainNoteRoutingModule } from './incident-complain-note-routing.module';
import { CompaninHandlingComponent } from './companin-handling/companin-handling.component';
import { CompaninHandlingLayoutComponent } from './companin-handling-layout/companin-handling-layout.component';
import {FormsModule} from "@angular/forms";
import {MultiSelectModule} from "@syncfusion/ej2-angular-dropdowns";

@NgModule({
  imports: [
    CommonModule,
    IncidentComplainNoteRoutingModule,
    FormsModule,
    MultiSelectModule,
  ],
  declarations: [CompaninHandlingComponent, CompaninHandlingLayoutComponent]
})
export class IncidentComplainNoteModule { }
