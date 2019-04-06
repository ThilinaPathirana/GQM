import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Mgts1LayoutComponent} from './mgts1-layout/mgts1-layout.component';
import {Mgts1Component} from './mgts1/mgts1.component';
import {ViewScopeComponent} from './view-scope/view-scope.component';


const routes: Routes = [
  {path: '', component: Mgts1LayoutComponent ,
    children: [
      {path: '', component: Mgts1Component, outlet: 'outlet1'},
    ]
  },

  {path: 'viewScope', component: Mgts1LayoutComponent ,
    children: [
      {path: '', component: ViewScopeComponent, outlet: 'outlet1'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScopeRoutingModule { }
