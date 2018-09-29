import { AngularMaterialModule } from '../app-modules/angular-material.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterModule,
    // PerfectScrollbarModule,
  ],
  declarations: [
    MainComponent,
  ],
  entryComponents: [
    MainComponent,
  ],
})
export class AppLayoutsModule {}
