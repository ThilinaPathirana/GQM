import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import {MenuItemComponent} from './app-widgets/home-page-widgets/menu-item/menu-item.component';
import {HomePageWidgetsModule} from './app-widgets/home-page-widgets/home-page-widgets.module';

const appRoutes: Routes = [
    { path: 'home', loadChildren:  './app-widgets/home-page-widgets/home-page-widgets.module#HomePageWidgetsModule'},  // this will add to app routes
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
