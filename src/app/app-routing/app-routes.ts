import { Routes } from '@angular/router';
import {MainComponent} from '../app-layouts/main/main.component';
import {WidgetTypes} from '../app-constants/enums/widget-types.enum';

export const routes: Routes = [
  {
    path: ':mode',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'secure', component: MainComponent,
        children: [
          {
            path: 'main-pages', data: { widgetId: WidgetTypes.StockProfile },
            loadChildren: 'app/app-widgets/fd-page-widgets/fd-page-widgets.module#FdPageWidgetsModule',
          },
        ],
      },
    ],
  },
];
