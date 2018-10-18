import { Observable, Subject, concat, from, of, timer } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Channels } from '../../app-constants/enums/channels.enum';
import { CommunicationV2Service } from './communication-v2.service';
import { ConnectStatus } from '../../app-constants/enums/connect-status.enum';
import { ConnectionConfig } from '../../app-config/config.service';
import { ConnectionV2 } from './connection-v2';
import { Data } from './data';
import { Injectable } from '@angular/core';
import { LoggerService } from '../../app-utils/logger.service';
// import { TradeUserDataStore } from '../trade/data-stores/trade-user-data-store';
import { UserState } from '../auth/user-state';

@Injectable()
export class DataService {

  private responseStream$: Subject<any>;
  private responseAjaxStream$: Subject<any>;

  private connectionList: Array<ConnectionV2>;

  constructor(
    private communicationService: CommunicationV2Service,
    private loggerService: LoggerService,
    // private tradeUserDataStore: TradeUserDataStore,
  ) {
    this.responseStream$ = new Subject();
    this.responseAjaxStream$ = new Subject();
    this.updateResponseStream();
  }

  /**
	 * Initiate connections from config
	 * @param  {ConnectionConfig[]} connectionConfigs - Connection config
	 */
  public init(connectionConfigs: ConnectionConfig[]): void {
    this.connectionList = [];

    for (const config of connectionConfigs) {
      const connection = new ConnectionV2(this.loggerService, config.channel, config.url, config.isNative);
      this.connectionList.push(connection);
      this.observeConnection(connection.channel);
    }

    this.communicationService.init(this.connectionList);
  }

  /**
     * Send websocket message
     * @param {any} data - An object with following properties set
	 * @param {boolean} isAuthReq - optioan parameter for authenticating requests
	 * 						index	: Value Defined at Connection configuration index. Mandatory
     *                      data    : Data to send. Mandatory.
     */
  public sendToWs(data: Data, isAuthReq?: boolean): void {
    if (isAuthReq) {
      data.auth = true;
    }
    this.communicationService.send(data, isAuthReq);
  }

  /**
     * Un-subscribe websocket connection
     * @param {number| Array<number>} channels - Value Defined at Connection configuration index
     */
  public unsubscribeWsConnections(channels: number | Array<number>): void {
    if (channels instanceof Array) {
      channels.forEach(channel => {
        this.communicationService.unsubscribeConnection(channel);
      });
    } else {
      this.communicationService.unsubscribeConnection(channels);
    }
  }


  public getResponseSteam(): Subject<any> {
    return this.responseStream$;
  }

  public getAjaxResponseSteam(): Subject<any> {
    return this.responseAjaxStream$;
  }

  public status(): Observable<ConnectionV2> {

    return concat(from(this.connectionList), this.communicationService.getStatuses());
  }

  private updateResponseStream(): void {
    this.communicationService.getResponse().subscribe(msg => {
      if (msg && msg.data) {
        this.responseStream$.next(msg.data);
      }
    });
  }


  private observeConnection(channel: Channels): void {
    const connection = this.connectionList.find(val => val.channel === channel);
    const streamSub = this.communicationService.getStatuses().pipe(
      filter(con =>  con.channel === connection.channel),     // filter channel
      switchMap((con: ConnectionV2) => {  // create timer if disconnect and connect-
        // clear timer if a status comes
        if (con.status === ConnectStatus.Disconnected) {
          return timer(con.reconnectInterval).pipe(map(val => con));
        } else {
          return of(con);
        }
      }),
    ).subscribe(
      (con: ConnectionV2) => {
        switch (con.status) {
          case ConnectStatus.Connected:
            this.handleConnection(connection);
            break;
          case ConnectStatus.Disconnected:
            this.handleDisconnection(connection);
            break;
          default:
            // handle default statement
        }
      });
  }

  private handleConnection(connection: ConnectionV2): void {
    connection.connectionAttempts = 0;
    connection.reconnect = false;
  }

  private handleDisconnection(connection: ConnectionV2): void {
    connection.connectionAttempts += 1;

    if (UserState.getInstance().isAuthenticated) {
      connection.reconnect = true;
    } else {
      connection.clear(); // clear connection on log out or session timeout
    }

    switch (connection.channel) {
      case Channels.Trade:
        this.unsubscribeWsConnections([Channels.Price, Channels.PriceMeta]);
        if (!connection.reconnect) {
          // this.tradeUserDataStore.userEntity.clearEntity();
          // UserState.getInstance().clearInstance();
        }
        break;
      case Channels.Price:
        this.unsubscribeWsConnections(Channels.PriceMeta);
          if (!connection.reconnect) {
            // UserState.getInstance().clearPriceData();
          }
          break;
      case Channels.PriceMeta:
            // do nothing as of yet
        break;
        default:
            //
    }

    if (connection.reconnect) {
      this.loggerService.logInfo(
        `Reconnecting attempt: ${connection.connectionAttempts}, next: ${connection.reconnectInterval} channel: ${connection.url}` ,
        'DataService', connection);

      const reconnectMsg = {
        data: connection.reconnectToken,
        channel: connection.channel,
      };
      this.sendToWs(reconnectMsg, true);
    }
  }
}
