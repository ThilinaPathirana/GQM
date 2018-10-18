import { Subject,  timer } from 'rxjs';
import { bufferTime, last, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { Channels } from '../../../app-constants/enums/channels.enum';
import { CommunicationController } from '../communication-controller';
import { ConnectStatus } from '../../../app-constants/enums/connect-status.enum';
import { ConnectionV2 } from '../connection-v2';
import { Data } from '../data';
import { Injectable } from '@angular/core';
import { LoggerService } from '../../../app-utils/logger.service';
import { WebSocketSubjectConfig } from 'rxjs/webSocket';
import { Websocket } from './websocket';

@Injectable()
export class WebsocketControllerService implements CommunicationController {

  private connectionPool: { [ channel: string ]: ConnectionV2 } = {};
  private $response = new Subject<any> ();
  private connectStatuses = new Subject<ConnectionV2> ();

  constructor ( private loggerService: LoggerService ) {
  }

  public init ( connections: ConnectionV2[] ): void {
    for ( const connection of connections ) {
      this.addConnection ( connection );
    }
  }

  public send ( data: Data , connection: ConnectionV2 ): void {
    this.connectionPool[ connection.channel ].socket.stream.next ( data.data );
  }

  public unsubscribeConnection ( channel: Channels ): void {
    const connection: ConnectionV2 = this.connectionPool[ channel ];

    if ( connection.subscription ) {
      connection.subscription.unsubscribe ();
      connection.subscription = null;
    }
    connection.socket.stream.complete ();
  }

  public getResponse (): Subject<any> {
    return this.$response;
  }

  public getConnectionStatuses (): Subject<ConnectionV2> {
    return this.connectStatuses;
  }

  public addConnection ( connection: ConnectionV2 ): void {

    connection.status = ConnectStatus.Connecting;

    const config: WebSocketSubjectConfig<any> = {
      url: connection.url ,
      // protocol: connection.channel,
      serializer: ( e: any ): any => e ,
      deserializer: (<MessageEvent> ( e: MessageEvent ): any => e) ,
      openObserver: {
        next: ( event: any ) => {
          this.loggerService.logInfo ( 'connected to ' + connection.url , 'WebsocketControllerService' , event );
          connection.status = ConnectStatus.Connected;

          this.connectStatuses.next ( connection );

          const queuedMessages = connection.sendMessageQueue;
          for ( let i = 0 ; i < queuedMessages.length ; i ++ ) {
            this.send ( queuedMessages.shift () , connection );
          }
        } ,
        error: ( error: any ) => {
          this.loggerService.logError ( 'Error occurred connecting to' + connection.url , 'WebsocketControllerService' , error );
        } ,
        complete: () => {
          // implement
        } ,
      } ,
      closeObserver: {
        next: ( event: any ) => {
          connection.status = ConnectStatus.Disconnected;
          this.connectStatuses.next ( connection );
          this.loggerService.logInfo ( 'Disconnected from ' + connection.url , 'WebsocketControllerService' , event );
        } ,
        error: ( error: any ) => {
          this.loggerService.logError ( 'Error occurred while disconnecting from' + connection.url , 'WebsocketControllerService' , error );
        } ,
        complete: () => {
          // implement
        } ,
      } ,
      closingObserver: {
        next: ( event: any ) => {
          connection.status = ConnectStatus.Connecting;
          this.connectStatuses.next ( connection );
          this.loggerService.logInfo ( 'Disconnecting from ' + connection.url , 'WebsocketControllerService' , event );
        } ,
        error: ( error: any ) => {
          this.loggerService.logError (
            'Error occurred while preparing to disconnect from' + connection.url , 'WebsocketControllerService' , error );
        } ,
        complete: () => {
          // implement
        } ,
      } ,
      // WebSocketCtor: ,
      // binaryType: 'blob' | 'arraybuffer',
    };

    const socket = new Websocket ( config , this.loggerService );

    connection.subscription = socket.stream.subscribe (
      data => {
        data.connection = connection.channel;
        this.$response.next ( {data: data} );
      } ,
      error => {
        this.loggerService.logError ( 'Stream Error: ' + connection.url , 'WebsocketControllerService' , event );
      } ,
      () => {
        this.loggerService.logInfo ( 'Stream Completed: ' + connection.url , 'WebsocketControllerService' , event );
      } ,
    );

    let sendPulse = false;
    socket.stream                            // send heartbeats
      .pipe (
        tap ( ( val ) => {
          sendPulse = false;
        } ) ,
        bufferTime ( connection.pulseInterval ) ,    // buffer emits from socket stream within time period
        switchMap ( ( val ) => {
          if ( val.length < 1 ) {
            sendPulse = true;
            this.loggerService.logInfo ( `Starting Pulse for channel: ${Channels[ connection.channel ]}` , 'WebsocketControllerService' );
            return timer ( 0 , connection.pulseInterval ).pipe ( take ( connection.maxPulses + 1 ) );
          } else {
            return timer ( connection.pulseInterval );
          }
        } ) , // values 0,1,2..(maxpulses)
        takeUntil ( socket.stream.pipe ( last () ) ) , // complete when socket stream completes
      ).subscribe (
      value => {
        if ( sendPulse ) {
          if ( socket.heartbeats <= connection.maxPulses ) {
            this.send ( connection.pulse , connection );
            socket.heartbeats = value + 1;
            this.loggerService.logInfo ( `Sending ${socket.heartbeats} heartbeat to : ${connection.url}` , 'WebsocketControllerService' );
          } else {
            this.loggerService.logInfo ( `Max heartbeats ${connection.maxPulses} reached.`
              + `Will disconnect from : ${connection.url}.` , 'WebsocketControllerService' );
            this.unsubscribeConnection ( connection.channel );
          }
        }
      } ,
      error => {
        this.loggerService.logError (
          `Error occured while sending pulses to ${Channels[ connection.channel ]}` , 'WebsocketControllerService' );
      } ,
      () => {
        this.loggerService.logInfo ( `Pulse ended for ${Channels[ connection.channel ]}` , 'WebsocketControllerService' );
      } ,
    );

    connection.socket = socket;
    this.connectionPool[ connection.channel ] = connection;
  }
}
