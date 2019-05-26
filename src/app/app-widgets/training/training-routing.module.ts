import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingFrontComponent } from './training-front/training-front.component';
import { TrainingLayoutComponent } from './training-layout/training-layout.component';


const routes: Routes = [
  {path: '', component: TrainingLayoutComponent ,
    children: [
      {path: '', component: TrainingFrontComponent, outlet: 'outlet1'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
