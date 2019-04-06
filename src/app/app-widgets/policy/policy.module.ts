import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyFrontComponent } from './policy-front/policy-front.component';
import { PolicyLayoutComponent } from './policy-layout/policy-layout.component';
import {AngularMaterialModule} from '../../app-modules/angular-material.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  imports: [
    CommonModule,
    PolicyRoutingModule,
    AngularMaterialModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [PolicyFrontComponent, PolicyLayoutComponent]
})
export class PolicyModule { }
