import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './app-layouts/main/main.component';
import { BaseWidgetComponent } from './app-widgets/widget-utils/base-widget/base-widget.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './app-modules/angular-material.module';
import {AppLayoutsModule} from './app-layouts/app-layouts.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './app-widgets/login/login.component';
import {FormsModule} from '@angular/forms';
import {LocalizationService} from './app-utils/localization/localization.service';
import {ConfigService} from './app-config/config.service';
import {DataService} from './app-backend/communication/data.service';
import {HttpClientModule} from '@angular/common/http';
import {LoggerService} from './app-utils/logger.service';
import {NotificationService} from './app-utils/notification.service';
import {PipesModule} from './app-utils/pipes/pipes.module';
import {Scope} from '@angular/core/src/profile/wtf_impl';
import {ScopeModule} from './app-widgets/scope/scope.module';
import {PolicyModule} from './app-widgets/policy/policy.module';
import {TrainingModule} from './app-widgets/training/training.module';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {ChartModule} from "angular-highcharts";
import {UploadService} from "./app-backend/services/upload.service";
import {BackOfficeAuthService} from "./app-backend/auth/bo.auth.service";
import {BackOfficeService} from "./app-backend/bo/back-office.service";
import {CacheAtService} from "./app-backend/cache/cache-at.service";
import {AjaxService} from "./app-backend/communication/ajax/ajax.service";
import {CacheRequestAtGenerator} from "./app-backend/cache/cache-request-generator-at";
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';




@NgModule({
  declarations: [
    AppComponent,
    BaseWidgetComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppLayoutsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    PipesModule,
    TrainingModule,
    ScopeModule,
    PolicyModule,
    PerfectScrollbarModule,
    ChartModule,
    MultiSelectModule,

  ],
  providers: [
    UploadService,
    LocalizationService,
    LoggerService,
    ConfigService,
    DataService,
    NotificationService,
    BackOfficeAuthService,
    BackOfficeService,
    CacheAtService,
    AjaxService,
    CacheRequestAtGenerator,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
