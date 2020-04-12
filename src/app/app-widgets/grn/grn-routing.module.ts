import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrnLayoutComponent } from './grn-layout/grn-layout.component';
import { GrnFrontComponent } from './grn-front/grn-front.component';
const routes: Routes = [ 
  {path: '', component: GrnLayoutComponent ,
children: [
  {path: '', component: GrnFrontComponent, outlet: 'outlet1'},
]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrnRoutingModule { }
