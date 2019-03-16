import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageLayoutComponent} from './home-page-layout/home-page-layout.component';
import {MenuItemComponent} from './menu-item/menu-item.component';

const routes: Routes = [
  {path: '', component: HomePageLayoutComponent,
    children: [
      {path: '', component: MenuItemComponent, outlet: 'outlet2'},
      {path: '', component: MenuItemComponent, outlet: 'outlet1'}

    ]


  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageWidgetsRoutingModule {



}
