import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    AppHeaderModule,
    AngularMaterialModule,
    CommonModule,
    CommonWidgetModule,
    PipesModule,
    RouterModule,
    SubComponentsModule,
    PerfectScrollbarModule,
  ],
  declarations: [
    BackNavigationComponent,
    MainComponent,
    WebComponent,
  ],
  entryComponents: [
    WebComponent,
  ],
})
export class AppLayoutsModule {}
