import { CommonModule } from '@angular/common';
import { CommunicationV2Service } from './communication-v2.service';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { PostMessageModule } from 'ngx-post-message';
import { StreamRouteService } from './stream-route.service';
import { WebsocketControllerService } from './websocket/websocket-controller.service';

@NgModule({
  imports: [CommonModule, PostMessageModule],
  declarations: [],
  providers: [
    DataService,
    CommunicationV2Service,
    StreamRouteService,
    WebsocketControllerService,
  ],
})
export class CommunicationModule { }
