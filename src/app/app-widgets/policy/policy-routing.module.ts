import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PolicyLayoutComponent} from './policy-layout/policy-layout.component';
import {PolicyFrontComponent} from './policy-front/policy-front.component';

const routes: Routes = [
  {path: '', component: PolicyLayoutComponent ,
    children: [
      {path: '', component: PolicyFrontComponent, outlet: 'outlet1'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
