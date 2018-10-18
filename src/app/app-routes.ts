import { Routes } from '@angular/router';
import {MainComponent} from './app-layouts/main/main.component';
import {LoginComponent} from './app-widgets/login/login.component';
import {AuthGuardService} from './app-widgets/widget-utils/auth-guard.service';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'gts',
    canActivateChild: [AuthGuardService],
    canActivate: [AuthGuardService],
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: './app-widgets/home-page-widgets/home-page-widgets.module#HomePageWidgetsModule',
      },
      {
        path: 'WorkInstructions',
        loadChildren: './app-widgets/work-instr/work-instr.module#WorkInstrModule',
      },
      {
        path: 'home3',
        loadChildren: './app-widgets/home-page-widgets/home-page-widgets.module#HomePageWidgetsModule',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: '**', component: LoginComponent },
];
