import { Routes } from '@angular/router';
import {MainComponent} from './app-layouts/main/main.component';
import {WidgetTypes} from './app-constants/enums/widget-types.enum';
import {AppLayoutsModule} from './app-layouts/app-layouts.module';

export const routes: Routes = [
  {
    path: 'home', component: MainComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: './app-widgets/home-page-widgets/home-page-widgets.module#HomePageWidgetsModule',
    //   },
    // ],
  },
];
