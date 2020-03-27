import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageWidgetsRoutingModule } from './home-page-widgets-routing.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HomePageLayoutComponent } from './home-page-layout/home-page-layout.component';

@NgModule({
  imports: [
    CommonModule,
    HomePageWidgetsRoutingModule
  ],
  declarations: [MenuItemComponent, HomePageLayoutComponent]
})
export class HomePageWidgetsModule { }
