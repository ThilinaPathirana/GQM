import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { LoggerService } from '../../../app-utils/logger.service';

export class Websocket {

  private _heartbeats: number;
  private _stream: WebSocketSubject<any>;
  private _config: WebSocketSubjectConfig<any>;
  private loggerService: LoggerService;

  constructor(
    private _conf: WebSocketSubjectConfig<any> ,
    private logger: LoggerService ,
  ) {
    this.loggerService = logger;
    this._config = _conf;
    this.initConnection ( _conf );
  }

  public initConnection ( conf: WebSocketSubjectConfig<any> ): void {

    this._stream = new WebSocketSubject<MessageEvent> ( conf );
    this._heartbeats = 0;
  }

  public get stream (): WebSocketSubject<any> {
    return this._stream;
  }

  public get config (): WebSocketSubjectConfig<any> {
    return this._config;
  }

  public get heartbeats (): number {
    return this._heartbeats;
  }

  public set heartbeats ( value: number ) {
    this._heartbeats = value;
  }

  public reset (): void {
    this._heartbeats = 0;
  }
}
