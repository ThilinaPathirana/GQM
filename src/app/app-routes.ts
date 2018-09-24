import { Routes } from '@angular/router';
import {MainComponent} from './app-layouts/main/main.component';
import {WidgetTypes} from './app-constants/enums/widget-types.enum';
import {AppLayoutsModule} from './app-layouts/app-layouts.module';
import {HomePageWidgetsModule} from './app-widgets/home-page-widgets/home-page-widgets.module';
import { WorkInstrModule } from './app-widgets/work-instr/work-instr.module';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
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
];
