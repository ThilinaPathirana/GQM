import { Channels } from '../../app-constants/enums/channels.enum';
import { CommunicationController } from './communication-controller';
import { ConfigService } from '../../app-config/config.service';
import { ConnectStatus } from '../../app-constants/enums/connect-status.enum';
import { ConnectionV2 } from './connection-v2';
import { Data } from './data';
import { Injectable } from '@angular/core';
import { LoggerService } from '../../app-utils/logger.service';
import { Subject } from 'rxjs';
import { WebsocketControllerService } from './websocket/websocket-controller.service';

@Injectable()
export class CommunicationV2Service implements CommunicationController {

  private response$: Subject<{ data: { connection: Channels } }>;  // todo: change to {[channel: string]: Subject<any>}  subject of subjects
  private connectionPool: Array<ConnectionV2>;

  constructor (
    private configService: ConfigService ,
    private loggerService: LoggerService ,
    private websocket: WebsocketControllerService ,
  ) {
  }

  public init ( connections: ConnectionV2[] ): void {
    this.connectionPool = connections;
    const websocketConnections = this.connectionPool.filter ( connection => {
      return connection.channel === Channels.Trade || connection.channel === Channels.Price || connection.channel === Channels.PriceMeta ||
        connection.channel === Channels.BackOffice;
    } );
    this.websocket.init ( websocketConnections );
  }

  public send ( data: Data , connectConfig?: ConnectionV2 | boolean ): void {
    // todo : boolean value added to compatibility with old version
    const connection = this.connectionPool.find ( item => item.channel === data.channel );

    if ( connection ) {
      switch (connection.status) {
        case ConnectStatus.Connected:
          this.sendMessage ( data , connection );
          break;
        case ConnectStatus.Connecting:
        case ConnectStatus.Disconnected:
        case ConnectStatus.Initiate:
          this.enQueueMessage ( data , connection );
          break;
        default :
          this.loggerService.logError ( 'Undefined Connection State' , 'CommunicationService' );
      }

      if ( ! connection.token ) {     // set login token
        connection.token = data.data;
      }
    }
  }

  public unsubscribeConnection ( channel: Channels ): void {

    switch (channel) {
      case Channels.Trade:
      case Channels.Price:
      case Channels.PriceMeta:
      case Channels.BackOffice:
        this.websocket.unsubscribeConnection ( channel );
        break;
    }
  }

  public getResponse (): Subject<any> {
    this.response$ = this.websocket.getResponse ();
    return this.response$;
  }

  public getStatuses (): Subject<ConnectionV2> {
    return this.websocket.getConnectionStatuses ();
  }

  private sendMessage ( data: Data , connection: ConnectionV2 ): void {
    switch (data.channel) {
      case Channels.Trade:
      case Channels.Price:
      case Channels.PriceMeta:
      case Channels.BackOffice:
        this.websocket.send ( data , connection );
        break;
    }
  }

  private enQueueMessage ( data: Data , connection: ConnectionV2 ): void {

    if ( data.auth ) {
      if ( connection.sendMessageQueue[ 0 ] && connection.sendMessageQueue[ 0 ].auth ) {
        // add auth request if it's already not in the head of the queue
        connection.sendMessageQueue.shift ();
        connection.sendMessageQueue.unshift ( data );
      } else {
        connection.sendMessageQueue.unshift ( data );
      }
    } else {
      connection.sendMessageQueue.push ( data );
    }

    if ( connection.status === ConnectStatus.Disconnected ) {
      switch (data.channel) {
        case Channels.Trade:
        case Channels.Price:
        case Channels.PriceMeta:
          this.websocket.addConnection ( connection );
          break;
      }
    }
  }
}
