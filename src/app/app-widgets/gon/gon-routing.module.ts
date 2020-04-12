import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GonFrontComponent } from './gon-front/gon-front.component';
import { GonLayoutComponent } from './gon-layout/gon-layout.component';
const routes: Routes = [
  {path: '', component: GonLayoutComponent ,
    children: [
    {path: '', component: GonFrontComponent, outlet: 'outlet1'},
    ]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GonRoutingModule { }
