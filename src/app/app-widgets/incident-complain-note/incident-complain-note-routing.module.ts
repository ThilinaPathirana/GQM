import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Mgts1LayoutComponent} from "../scope/mgts1-layout/mgts1-layout.component";
import {Mgts1Component} from "../scope/mgts1/mgts1.component";
import {CompaninHandlingLayoutComponent} from "./companin-handling-layout/companin-handling-layout.component";
import {CompaninHandlingComponent} from "./companin-handling/companin-handling.component";

const routes: Routes = [
  {path: 'ComplainNote', component: CompaninHandlingLayoutComponent,
    children: [
      {path: '', component: CompaninHandlingComponent, outlet: 'outlet1'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentComplainNoteRoutingModule { }
