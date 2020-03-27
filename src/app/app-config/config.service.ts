import { Channels } from '../app-constants/enums/channels.enum';
import { ErrorCodes } from '../app-constants/enums/error-codes.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerService } from '../app-utils/logger.service';
import { ProtocolTypes } from '../app-constants/enums/protocol-types.enum';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

export const urlSuffixes = [
  { channel: Channels.Trade, suffix: '/appsocket' },
  { channel: Channels.Price, suffix: '/websocket/price' },
  { channel: Channels.PriceMeta, suffix: '/websocket/meta' },
  { channel: Channels.BackOffice, suffix: '/websocket/backoffice' },
];

export interface ConnectionConfig {
  channel: Channels;
  url: string;
  isSecure: boolean;
  isNative: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  private _configObj: any;
  private _isWidgetMode: boolean;
  private _appMode: string;
  private config: Subject<any> = new Subject();
  // private path = 'src/products/at/global/'
  constructor(private http: HttpClient, private logger: LoggerService, private router: Router) {
    this.isWidgetMode = false;
    this.http.get('app-config.json', { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } }).subscribe(
      data => {
        this.configObj = data;
        this.config.next(data);
      },
      err => {
        this.router.navigate(['/error'], { queryParams: { errorCode: ErrorCodes.AppConfigNotReceived } });
      });
  }

  public get isWidgetMode(): boolean {
    return this._isWidgetMode;
  }

  public set isWidgetMode(value: boolean) {
    this._isWidgetMode = value;
  }

  public get appMode(): string {
    return this._appMode;
  }

  public set appMode(value: string) {
    this._appMode = value;
  }

  public getStringConfigVal(key1: string, key2?: string, key3?: string): Promise<any> {
    return new Promise((resolve) => {
      if (!this.configObj) {
        this.config.subscribe(data => {
          this.configObj = data;
          resolve(this.getConfigurationVal(key1, key2, key3));
        });
      } else {
        resolve(this.getConfigurationVal(key1, key2, key3));
      }
    });
  }

  public getConnectionUrlString(protocol: ProtocolTypes, key1: string, key2?: string, urlSuffix?: string): Promise<string> {
    return new Promise((resolve) => {
      this.getStringConfigVal(key1, key2).then(configVal => {
        const notFoundException = 'Not Found';
        if (configVal.url) {
          resolve(this.getConnectionUrl(configVal, protocol, urlSuffix));
        } else {
          resolve(notFoundException);
        }
      });
    });
  }

  public getNumberConfigVal(key1: string, key2?: string, key3?: string): Promise<number> {
    return new Promise((resolve) => {
      this.getStringConfigVal(key1, key2, key3).then(configVal => {
        resolve(Number(configVal));
      });
    });
  }

  public getBoolConfigVal(key1: string, key2?: string, key3?: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.getStringConfigVal(key1, key2, key3).then(configVal => {
        resolve(configVal === 'true');
      });
    });
  }

  public getConnectionConfig(): Promise<Array<ConnectionConfig>> {
    return new Promise((resolve => {
      this.getStringConfigVal('connectionConfig').then(conConfig => {
        try {
          let connections = [];
          if (conConfig.trade && conConfig.price) {
            connections = [
              {
                channel: Channels.Trade,
                url: this.getConnectionUrl(
                  conConfig.trade,
                  ProtocolTypes.Websoket,
                  urlSuffixes.find(config => config.channel === Channels.Trade).suffix,
                ),
                isSecure: conConfig.trade.isSecure,
                isNative: this.isWidgetMode,
              },
              {
                channel: Channels.Price,
                url: this.getConnectionUrl(
                  conConfig.price,
                  ProtocolTypes.Websoket,
                  urlSuffixes.find(config => config.channel === Channels.Price).suffix,
                ),
                isSecure: conConfig.price.isSecure,
                isNative: this.isWidgetMode,
              },
              {
                channel: Channels.PriceMeta,
                url: this.getConnectionUrl(
                  conConfig.price,
                  ProtocolTypes.Websoket,
                  urlSuffixes.find(config => config.channel === Channels.PriceMeta).suffix,
                ),
                isSecure: conConfig.price.isSecure,
                isNative: this.isWidgetMode,
              },
              {
                channel: Channels.Wrapper,
                isSecure: true,
                isNative: true,
              },
            ];
          }
          resolve(connections);
        } catch (e) {
          this.logger.logError('Error occurred while getting connection config!!', 'ConfigService', e);
        }
      });
    }));
  }

  public getPhoenixConnectionConfig(): Promise<Array<ConnectionConfig>> {
    return new Promise((resolve => {
      this.getStringConfigVal('connectionConfig').then(conConfig => {
        try {
          let connections = [];
          if (conConfig.trade && conConfig.price) {
            connections = [
              {
                channel: Channels.Price,
                url: this.getConnectionUrl(
                  conConfig.price,
                  ProtocolTypes.Websoket,
                  urlSuffixes.find(config => config.channel === Channels.Price).suffix,
                ),
                isSecure: conConfig.price.isSecure,
                isNative: this.isWidgetMode,
              },
              {
                channel: Channels.PriceMeta,
                url: this.getConnectionUrl(
                  conConfig.price,
                  ProtocolTypes.Websoket,
                  urlSuffixes.find(config => config.channel === Channels.PriceMeta).suffix,
                ),
                isSecure: conConfig.price.isSecure,
                isNative: this.isWidgetMode,
              },
            ];
          }
          resolve(connections);
        } catch (e) {
          this.logger.logError('Error occurred while getting connection config!!', 'ConfigService', e);
        }
      });
    }));
  }

  public getBackOfficeConnectionConfig(): Promise<Array<ConnectionConfig>> {
    return new Promise((resolve => {
      this.getStringConfigVal('connectionConfig').then(conConfig => {
        try {
          let connections = [];
          if (conConfig.bo) {
            connections = [
              {
                channel: Channels.BackOffice,
                url: this.getConnectionUrl(
                  conConfig.bo,
                  ProtocolTypes.Websoket,
                  urlSuffixes.find(config => config.channel === Channels.BackOffice).suffix,
                ),
                isSecure: conConfig.bo.isSecure,
              },
            ];
          }
          resolve(connections);
        } catch (e) {
          this.logger.logError('Error occurred while getting connection config!!', 'ConfigService', e);
        }
      });
    }));
  }

  private getConnectionUrl(config: {url: string, isSecure: boolean}, protocol: ProtocolTypes, urlSuffix?: string): string {
    let urlPrefix;
    let url;
    switch (protocol) {
      case ProtocolTypes.Websoket:
        urlPrefix =  config.isSecure ? 'wss://' : 'ws://';
        url = urlPrefix + config.url + urlSuffix;
        break;
      case ProtocolTypes.Http:
        urlPrefix =  config.isSecure ? 'https://' : 'http://';
        url = urlPrefix + config.url;
        break;
      default:
        this.logger.logError('Unsupported protocol type', 'ConfigService');
    }
    return url;
  }

  private getConfigurationVal(key1: string, key2?: string, key3?: string): any {
    let configurationValue;
    const notFoundException = '';
    try {
      if (key3 && key2) {
        configurationValue = this.configObj[key1][key2][key3];
      } else if (key2) {
        configurationValue = this.configObj[key1][key2];
      } else {
        configurationValue = this.configObj[key1];
      }
    } catch (e) {
      this.logger.logError('Config entry not found for the key: ' + key1 + '.' + key2 + '.' + key3, 'ConfigService');
      return notFoundException;
    }

    if (configurationValue) {
      return configurationValue;
    } else {
      return notFoundException;
    }
  }

  private get configObj(): any {
    return this._configObj;
  }

  private set configObj(value: any) {
    this._configObj = value;
    this._configObj.connectionConfig.isWidgetMode = this.isWidgetMode;
  }
}
