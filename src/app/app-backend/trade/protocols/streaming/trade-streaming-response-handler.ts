// import { AccountSummaryDataStore } from '../../data-stores/account-summary-data-store';
import { AdminServiceResponseTypes } from '../../../../app-constants/enums/trade-meta/admin-service/admin-serive-response-types.enum';
import { AuthenticationResponseTypes } from '../../../../app-constants/enums/trade-meta/authentication/authentication-response-types.enum';
// import { AutoTradeMasterDataStore } from '../../data-stores/auto-trade-master-data-store';
// import { CommonHelperService } from '../../../../app-utils/helper/common-helper.service';
import { CustomInquiryResponseTypes } from '../../../../app-constants/enums/trade-meta/custom-inquiry/custom-inquiry-response-types.enum';
// import { ExchangeRateDataStore } from '../../data-stores/exchange-rate-data-store';
import { FinanceResponseTypes } from '../../../../app-constants/enums/trade-meta/finance/finance-response-types.enum';
import { Injectable } from '@angular/core';
import { InquiryResponseTypes } from '../../../../app-constants/enums/trade-meta/inquiry/inquiry-response-types.enum';
// import { LocalizationKeyPrefix } from '../../../../app-constants/enums/localization-key-prefix.enum';
import { LocalizationService } from '../../../../app-utils/localization/localization.service';
import { LoggerService } from '../../../../app-utils/logger.service';
import { NotificationService } from '../../../../app-utils/notification.service';
import { NotificationType } from '../../../../app-constants/enums/notification-types.enum';
// import { OrderListDataStore } from '../../data-stores/order-list-data-store';
// import { PortfolioDataStore } from '../../data-stores/portfolio-data-store';
import { StreamRouteService } from '../../../communication/stream-route.service';
import { Subject } from 'rxjs';
import { SubscriptionResponseTypes } from '../../../../app-constants/enums/trade-meta/subscription/subscription-response-types.enum';
import { SystemResponseTypes } from '../../../../app-constants/enums/trade-meta/system/system-response-types.enum';
// import { TradeHelperService } from '../../../../app-utils/helper/trade-helper.service';
// import { TradeMasterDataStore } from '../../data-stores/trade-master-data-store';
import { TradeMetaGroups } from '../../../../app-constants/enums/trade-meta/trade-meta-groups.enum';
import { TradeProtocolParser } from '../trade-protocol-parser';
// import { TradeRequestsDataStore } from '../../data-stores/trade-requests-data-store';
import { TradeResponse } from '../trade-response';
// import { TradeUserDataStore } from '../../data-stores/trade-user-data-store';
import { TradingResponseTypes } from '../../../../app-constants/enums/trade-meta/trading/trading-response-types.enum';
import { UserState } from '../../../auth/user-state';
// import { WealthPortfolioDataStore } from '../../data-stores/wealth-portfolio-data-store';
import { map } from 'rxjs/operators';
import {TradeUserDataStore} from '../../data-stores/trade-user-data-store';

@Injectable()
export class TradeStreamingResponseHandler {

  private tradeResponseStream$: Subject<Object>;
  private orderStatusStream$: Subject<any>;
  private _orderEntityStream$: Subject<any>;
  private _requestStatusStream$: Subject<any>;
  private tradeProtocolParser: TradeProtocolParser;

  constructor(
    private streamRouteService: StreamRouteService,
    private tradeDataStore: TradeUserDataStore,
    private loggerService: LoggerService,
  ) {
    this.tradeResponseStream$ = new Subject();
    this.orderStatusStream$ = new Subject();
    this._requestStatusStream$ = new Subject();
    this._orderEntityStream$ = new Subject();
    this.tradeProtocolParser = new TradeProtocolParser(loggerService);
    this.updateTradeResponseStream();
  }

  public getTradeResponseStream(): Subject<any> {
    return this.tradeResponseStream$;
  }

  public getOrderStatusStream(): Subject<any> {
    return this.orderStatusStream$;
  }

  public get requestStatusStream$(): Subject<any> {
    return this._requestStatusStream$;
  }

  public get orderEntityStream$(): Subject<any> {
    return this._orderEntityStream$;
  }

  private updateTradeResponseStream(): void {
    this.streamRouteService.getTradeResponseStream().pipe(
      map(response => {
        return this.processTradeResponse(response.data);
      })).subscribe(response => {
        this.updateTradeModel(response);
        this.tradeResponseStream$.next(response);
      });
  }

  private processTradeResponse(response: string): TradeResponse {
    return this.tradeProtocolParser.processTradeResponse(response);
  }

  private updateTradeModel(response: TradeResponse): void {

    if (response && response.data && response.header) {
      if (response.header.sessionId && 'UNSOLICITED' !== response.header.sessionId) {
        UserState.getInstance().setTadeValues({ SESN_ID: response.header.sessionId });  // update session for every trade response
      }
      switch (response.header.messageGroup) {
        case TradeMetaGroups.Authentication:
          switch (response.header.messageType) {
            case AuthenticationResponseTypes.AuthNormal:
              this.tradeDataStore.updateCustomer(response);
              break;
             default:
               this.loggerService.logWarning('No response type under group - ' +
                 TradeMetaGroups.Authentication, 'TradeStreamingResponseHandler');
          }
          break;
          case TradeMetaGroups.System:
            switch (response.header.messageType) {
              case SystemResponseTypes.Pulse:
                this.loggerService.logDebug('Pulse Received', 'TradeStreamingResponseHandler');
                break;
                default:
                  this.loggerService.logWarning('No response type under group - ' +
                    TradeMetaGroups.System, 'TradeStreamingResponseHandler'); }
                    break;
            default:
              this.loggerService.logWarning('No response group - ' + response.header.messageGroup, 'TradeStreamingResponseHandler');
      }
    }
  }
}
