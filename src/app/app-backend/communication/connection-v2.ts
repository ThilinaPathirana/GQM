import { Subject, Subscription } from 'rxjs';
import { Channels } from '../../app-constants/enums/channels.enum';
import { ConnectStatus } from '../../app-constants/enums/connect-status.enum';
import { Data } from './data';
import { LoggerService } from '../../app-utils/logger.service';
// import { PriceStreamingRequestHandler } from '../price/protocols/streaming/price-streaming-request-handler';
import { TimerIntervals } from '../../app-constants/enums/timer-intervals.enum';
// import { TradeStreamingRequestHandler } from '../trade/protocols/streaming/trade-streaming-request-handler';
import { Websocket } from './websocket/websocket';

const MAX_ATTEMPTS = 3;
const RECONNECT_BASE_MULTIPLIER = 30;

export class ConnectionV2 {
  private _socket: Websocket;
  private _subscription: Subscription;

  private _dataStream: Subject<MessageEvent>;
  private _status: ConnectStatus;
  private _token: string;

  private _sendPulses: boolean;
  private _pulseInterval: number;
  private _maxPulses: number;

  private _reconnectToken: string;
  private _connectionAttempts: number;
  private _reconnect: boolean;

  private _channel: Channels;
  private _url?: string;
  private _native?: boolean;
  private _sendMessageQueue: Array<any>;

  constructor(private loggerService: LoggerService, channel: Channels, url: string = '', native: boolean = false) {
    this._dataStream = null;
    this._status = ConnectStatus.Initiate;
    this._token = '';

    this._sendPulses = true;
    this._pulseInterval = TimerIntervals.heartbeatInterval;
    this._maxPulses = MAX_ATTEMPTS;
    this._connectionAttempts = 0;
    this._reconnect = false;
    this._channel = channel;
    this._url = url;
    this._native = native;
    this._sendMessageQueue = [];
  }

  public get channel (): Channels {
    return this._channel;
  }

  public get url (): string {
    return this._url;
  }

  public get native (): boolean {
    return this._native;
  }

  public get sendMessageQueue (): Array<any> {
    return this._sendMessageQueue;
  }

  public get socket (): Websocket {
    return this._socket;
  }

  public set socket ( value: Websocket ) {
    this._socket = value;
  }

  public get subscription (): Subscription {
    return this._subscription;
  }

  public set subscription ( value: Subscription ) {
    this._subscription = value;
  }

  public get dataStream (): Subject<MessageEvent> {
    return this._dataStream;
  }

  public set dataStream ( value: Subject<MessageEvent> ) {
    this._dataStream = value;
  }

  public get status (): ConnectStatus {
    return this._status;
  }

  public set status ( value: ConnectStatus ) {
    this._status = value;
  }

  public get sendPulses (): boolean {
    return this._sendPulses;
  }

  public set sendPulses ( value: boolean ) {
    this._sendPulses = value;
  }

  public get token (): string {
    return this._token;
  }

  public set token ( value: string ) {
    this._token = value;
  }

  public get pulseInterval (): number {
    return this._pulseInterval;
  }

  public set pulseInterval ( value: number ) {
    this._pulseInterval = value;
  }

  public get maxPulses (): number {
    return this._maxPulses;
  }

  public set maxPulses ( value: number ) {
    this._maxPulses = value;
  }

  public get connectionAttempts (): number {
    return this._connectionAttempts;
  }

  public set connectionAttempts ( value: number ) {
    this._connectionAttempts = value;
  }

  public get reconnect (): boolean {
    return this._reconnect;
  }

  public set reconnect ( value: boolean ) {
    this._reconnect = value;
  }

  public get reconnectInterval (): number {
    let time = 0;
    if ( this.connectionAttempts === 0 ) {
      time = TimerIntervals.baseReconnectInterval;
    } else if ( this.connectionAttempts > 0 && this.connectionAttempts <= MAX_ATTEMPTS ) {
      time = this.connectionAttempts * TimerIntervals.baseReconnectInterval;
    } else {
      time = TimerIntervals.baseReconnectInterval * RECONNECT_BASE_MULTIPLIER;
    }
    return time;
  }

  public get pulse (): Data {
    return this.generatePulse ( this.channel );
  }

  public get reconnectToken (): string {
    if ( ! this._reconnectToken ) {
      this._reconnectToken = this.genarateReconnectToken ();
    }
    return this._reconnectToken;
  }

  public clear (): void {
    this._sendMessageQueue = [];
    this.reconnect = false;
  }

  private generatePulse ( channel: Channels ): Data {
    let payload: Data;
    switch ( channel ) {
      case Channels.Trade:
        // payload = TradeStreamingRequestHandler.getInstance().generatePulseRequest();
        break;
      case Channels.Price:
      case Channels.PriceMeta:
        // payload = PriceStreamingRequestHandler.getInstance().generatePulseRequest(channel);
        break;
      default:
        payload = {channel: channel, data: {}};
    }
    return payload;
  }

  private genarateReconnectToken (): string {
    let reconnectToken = '';
    switch ( this.channel ) {
      case Channels.Trade:
        let authMsg;
        try {
          authMsg = JSON.parse ( this.token );
          authMsg.DAT.RPT_LOGIN = 1;
        } catch ( error ) {
          this.loggerService.logError ( 'Error occured while parsing reconnect token','ConnectionV2',error );
        }
        reconnectToken = authMsg ? JSON.stringify ( authMsg ) : '';
        break;
      case Channels.Price:
      case Channels.PriceMeta:
        reconnectToken = this.token;
        break;
      default:
        reconnectToken = '';
    }
    return reconnectToken;
  }
}
