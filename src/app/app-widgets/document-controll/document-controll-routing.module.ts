import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopLevelManualsComponent} from "./top-level-manuals/top-level-manuals.component";
import {DocumetControlLayoutComponent} from "./documet-control-layout/documet-control-layout.component";
import {Mgts1LayoutComponent} from "../scope/mgts1-layout/mgts1-layout.component";
import {Mgts1Component} from "../scope/mgts1/mgts1.component";


const routes: Routes = [
  {path: 'TopLevelManuals', component: DocumetControlLayoutComponent ,
    children: [
      {path: '', component: TopLevelManualsComponent, outlet: 'outlet1'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentControllRoutingModule { }
