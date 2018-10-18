import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { LogLevels } from '../app-constants/enums/log-levels.enum';
import { TimerIntervals } from '../app-constants/enums/timer-intervals.enum';
import { environment } from '../../environments/environment';

const MAX_BUFF_SIZE = 1000;
@Injectable()
export class LoggerService {

  private loggerUrl = 'logger';
  private lastSentIndex = 0;
  private isRequestInProgress = false;
  private isPeriodicUpdateStarted = false;
  private systemLogLevel = environment.appLogLevel;
  private serverLogLevel = environment.serverLogLevel;
  private serverLogBuffer = '';
  private timer;

  constructor(private http: HttpClient) {
		/* tslint:disable */
		environment.consoleWarning.forEach((value: { text: string, style: string }) => {
			console.log('%c' + value.text, value.style);
		});
		/* tslint:enable */

    if (environment.serverLogLevel > LogLevels.DisableLogs) {
      this.timer = setInterval(() => {
        this.uploadToServer();
        }, TimerIntervals.serverLogUploadInterval);
    }
  }

  public logError(logEntry: string, module: string, logEvent?: any): void {
    this.amendLog(logEntry, LogLevels.LogError, module, logEvent);
  }

  public logWarning(logEntry: string, module: string, logEvent?: any): void {
    this.amendLog(logEntry, LogLevels.LogWarning, module, logEvent);
  }

  public logInfo(logEntry: string, module: string, logEvent?: any): void {
    this.amendLog(logEntry, LogLevels.LogInfo, module, logEvent);
  }

  public logDebug(logEntry: string, module: string, logEvent?: any): void {
    this.amendLog(logEntry, LogLevels.LogDebug, module, logEvent);
  }

  public LogData(logEntry: string, module: string, logEvent?: any): void {
    this.amendLog(logEntry, LogLevels.LogData, module, logEvent);
  }

  private amendLog(logEntry: string, logType: LogLevels, module: string, logEvent?: Object): void {
    const logStr = module ? ['[', module, '] ', logEntry].join('') : logEntry;

    try {
      if (this.systemLogLevel >= logType) {
        this.amendLogConsole(logStr, logType, logEvent);
      }

      if (this.serverLogLevel >= logType) {
        this.amendLogToBuffer(logStr, logType);
      }
    } catch (e) {
      this.amendLogConsole(['Logger error: ', e].join(''), e, LogLevels.LogError);
    }
  }

  private amendLogConsole(logEntry: string, logType: LogLevels, logEvent: Object = ''): void {
		/* tslint:disable */
		switch (logType) {
			case LogLevels.LogError:
				console.error(logEntry, logEvent);
				break;

			case LogLevels.LogWarning:
				console.warn(logEntry, logEvent);
				break;

			case LogLevels.LogInfo:
				console.info(logEntry, logEvent);
				break;

			default:
				console.log(logEntry, logEvent);
				break;
		}
		/* tslint:enable */
  }

  private amendLogToBuffer(logEntry: string, logType: LogLevels): void {
    if (environment.serverLogLevel > LogLevels.DisableLogs) {
      this.serverLogBuffer += '\n' + logEntry;

      if (this.serverLogBuffer.length > MAX_BUFF_SIZE) {
        this.uploadToServer();
      }
    }
  }

  private uploadToServer(): void {
    // TODO: [Amila] Below code needs to be re-factored
    try {
      if (this.serverLogBuffer.length > 0) {
        const loggerURL = 'http://mtplusqa.mubashertrade.com/LanguagePortal/ErrorLog';
        const data = new HttpParams();
        data.set('userId', 'Amila');
        data.set('data', this.serverLogBuffer);

        this.http.get(loggerURL, { params: data });
      }
    } catch (e) {
      this.serverLogBuffer = '';
    }

    this.serverLogBuffer = '';
  }
}
