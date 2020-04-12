import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierFrontComponent } from './supplier-registration/supplier-front/supplier-front.component';
import { SupplierLayoutComponent } from './supplier-registration/supplier-layout/supplier-layout.component';
const routes: Routes = [ 
  {path: '', component: SupplierLayoutComponent ,
children: [
  {path: '', component: SupplierFrontComponent, outlet: 'outlet1'},
]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
