import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {StreamRouteService} from '../communication/stream-route.service';
import {UserState} from './user-state';
import {LoggerService} from '../../app-utils/logger.service';
import {CommunicationV2Service} from '../communication/communication-v2.service';
import {DataService} from '../communication/data.service';
import {TradeRequests} from '../../app-constants/enums/trade-meta/trade-requests.enum';
import {TradeBackends} from '../../app-constants/enums/trade-backends.enum';
import {TradeService} from '../trade/trade.service';

interface AuthStatus {
  isValidSession: boolean;
  isAuthenticated: boolean;
  responseMessage: string;
  rejectReason: string;

}
const MILLISECONDS_TO_MINUTE = 60000;

@Injectable()
export class AuthService {

  public currentUser: any; // have to add getters and setters
  private redirectUrl: string;
  private authStatus: Subject<AuthStatus>;
  private authRequestTimer: 1000;

  private authResponse: any;
  constructor(private communicationService: CommunicationV2Service,
              private streamRouteService: StreamRouteService,
              private router: Router,
              private loggerService: LoggerService,
              private dataService: DataService,
              private tradeService: TradeService ) {
  }

  public authenticateUser(username: string, password: string): void {
    this.authStatus = new Subject();
    this.loggerService.logInfo('Connecting...', 'AuthService');

    // create back-office login request
    const loginData = {
      UN: username,
      PWD: Md5.hashStr(password).toString().toUpperCase(),
    };
    this.currentUser = loginData;

    this.tradeService.sendToTrade(
      TradeRequests.Authentication,
      TradeBackends.TRS,
      loginData.UN,
      loginData.PWD,
    );
    this.streamRouteService.getBackOfficeResponseStream().subscribe(res => {
      this.loggerService.logInfo('Response Received.', 'AuthService');

      clearTimeout(this.authRequestTimer);

      const webAuthResponse: AuthStatus = {
        isValidSession: false,
        isAuthenticated: false,
        responseMessage: '',
        rejectReason: '',
      };

      this.authResponse = JSON.parse(res.data); // no need to JSON parse in new HttpClient service

      if (this.authResponse && this.authResponse.DAT) {
        webAuthResponse.isAuthenticated = this.authResponse.DAT.STATUS === 1;
        webAuthResponse.responseMessage = this.authResponse.DAT.DES;
        webAuthResponse.isValidSession = true;
      } else {
        webAuthResponse.isAuthenticated = false;
        webAuthResponse.responseMessage = 'Something went wrong..!';
      }
      this.loggerService.logInfo('auth response', this.authResponse.DAT);
      UserState.getInstance().setBackOfficeValues(this.authResponse.DAT);
      UserState.getInstance().isAuthenticated = webAuthResponse.isAuthenticated;
      UserState.getInstance().isValidSession = webAuthResponse.isValidSession;
      this.authStatus.next(webAuthResponse);
    });
  }

  public logOut(): void {
    if (UserState.getInstance().isAuthenticated) {
      this.router.navigateByUrl('/login');
      this.loggerService.logError('Log out Successfully', 'AuthService');
    }
  }

  public subscribeForAuthResponse(): Subject<AuthStatus> {
    return this.authStatus;
  }

  private terminateAuthentication(): void {
    if (!UserState.getInstance().isAuthenticated) {
      const failedAuthStatus: AuthStatus = {
        isValidSession: false,
        isAuthenticated: UserState.getInstance().isAuthenticated,
        responseMessage: '',
        rejectReason: 'Error Occurred..',
      };
      this.authStatus.next(failedAuthStatus);
      this.authStatus.complete();
    }
  }

  public get redirectURL(): string {
    return this.redirectUrl;
  }

  public set redirectURL(value: string) {
    this.redirectUrl = value;
  }

  public get userDetails(): any {
    return this.currentUser;
  }

  public set userDetails(value: any) {
    this.currentUser = value;
  }
}
