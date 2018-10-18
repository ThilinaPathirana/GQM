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
import {AuthService} from './app-backend/auth/auth.service';
import {CommunicationV2Service} from './app-backend/communication/communication-v2.service';
import {LocalizationService} from './app-utils/localization/localization.service';
import {ConfigService} from './app-config/config.service';
import {DataService} from './app-backend/communication/data.service';
import {HttpClientModule} from '@angular/common/http';
import {LoggerService} from './app-utils/logger.service';
import {WebsocketControllerService} from './app-backend/communication/websocket/websocket-controller.service';
import {StreamRouteService} from './app-backend/communication/stream-route.service';
import {NotificationService} from './app-utils/notification.service';
import {TradeModule} from './app-backend/trade/trade.module';
import {PipesModule} from './app-utils/pipes/pipes.module';
import {TradeService} from './app-backend/trade/trade.service';
import {AuthGuardService} from './app-widgets/widget-utils/auth-guard.service';

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
    TradeModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    CommunicationV2Service,
    LocalizationService,
    LoggerService,
    ConfigService,
    DataService,
    StreamRouteService,
    NotificationService,
    TradeService,
    WebsocketControllerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
