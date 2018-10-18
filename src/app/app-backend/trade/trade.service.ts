import { AdminServiceRequestTypes } from '../../app-constants/enums/trade-meta/admin-service/admin-service-request-types.enum';
import { AuthenticationRequestTypes } from '../../app-constants/enums/trade-meta/authentication/authentication-request-types.enum';
import { ConfigService } from '../../app-config/config.service';
import { CustomInquiryRequestTypes } from '../../app-constants/enums/trade-meta/custom-inquiry/custom-inquiry-request-types.enum';
import { DataService } from '../communication/data.service';
// import { DeviceState } from '../../app-config/device-state';
import { FinanceRequestTypes } from '../../app-constants/enums/trade-meta/finance/finance-request-types.enum';
import { Injectable } from '@angular/core';
import { InquiryRequestTypes } from '../../app-constants/enums/trade-meta/inquiry/inquiry-request-types.enum';
import { LocalizationService } from '../../app-utils/localization/localization.service';
import { LoggerService } from '../../app-utils/logger.service';
import { Md5 } from 'ts-md5/dist/md5';
import { SubscriptionRequestTypes } from '../../app-constants/enums/trade-meta/subscription/subscription-request-types.enum';
import { SubscriptionResponseTypes } from '../../app-constants/enums/trade-meta/subscription/subscription-response-types.enum';
import { SystemRequestTypes } from '../../app-constants/enums/trade-meta/system/system-request-types.enum';
import { TradeBackends } from '../../app-constants/enums/trade-backends.enum';
import { TradeMasterData } from '../../app-constants/enums/trade-meta/trade-master-data.enum';
import { TradeMetaGroups } from '../../app-constants/enums/trade-meta/trade-meta-groups.enum';
import { TradeRequest } from './protocols/trade-request';
import { TradeRequestPopulater } from './protocols/trade-request-populater';
import { TradeRequests } from '../../app-constants/enums/trade-meta/trade-requests.enum';
import { TradeResponse } from './protocols/trade-response';
import { TradeStreamingRequestHandler } from './protocols/streaming/trade-streaming-request-handler';
import { TradingInquiryRequestTypes } from '../../app-constants/enums/trade-meta/trading-inquiry/trading-inquiry-request-types.enum';
import { TradingRequestTypes } from '../../app-constants/enums/trade-meta/trading/trading-request-types.enum';
import { UserState } from '../auth/user-state';

@Injectable()
export class TradeService {
  private tradeStreamingRequestHandler: TradeStreamingRequestHandler;
  private messageQueue = [];

  constructor(
    private configService: ConfigService,
    private tradeRest: DataService,
    private language: LocalizationService,
    private logger: LoggerService,
    private network: DataService,
    private tradeRequestPopulater: TradeRequestPopulater,
  ) {
    this.tradeStreamingRequestHandler = TradeStreamingRequestHandler.getInstance();
  }

  public sendToTrade(requestType: TradeRequests, api: TradeBackends, ...params: any[]): null | Promise<TradeResponse> {
    let req: any;
    let response: null | Promise<TradeResponse>;

    switch (requestType) {
      case  TradeRequests.Authentication:
        req = new TradeRequest<TradeMetaGroups, AuthenticationRequestTypes>();
        req.messageGroup = TradeMetaGroups.Authentication;
        req.messageType = AuthenticationRequestTypes.AuthNormal;
        req.loginName = params[0];
        req.password = params[1];
        req.encodingType = '-1';
        req.isAuthRequest = true;
        break;
      case  TradeRequests.DocumentControl:
        req = new TradeRequest<TradeMetaGroups, AuthenticationRequestTypes>();
        req.messageGroup = TradeMetaGroups.Authentication;
        req.messageType = AuthenticationRequestTypes.AuthNormal;
        req.loginName = params[0];
        req.password = params[1];
        req.encodingType = '-1';
        req.isAuthRequest = true;
        break;
        default:
          this.logger.logError('Invalid request type: ' + requestType, 'TradeService');
          break;
    }

    // if (!UserState.getInstance().isTradeAuthenticated && !req.isAuthRequest) {
    //   this.messageQueue.push({
    //     requestType: requestType,
    //     api: api,
    //     params: params,
    //   });
    //   return;
    // }
    if (req) {
      switch (api) {
        case TradeBackends.TRS:
          this.sendToStreaming(req);
          break;
          default:
            response = null;
      }
    } else {
      this.logger.logError('Trade Request not created, please use correct request type!', 'TradeService');
    }

    return response;
  }

  public sendQueuedRequests(): void {
    if (UserState.getInstance().isTradeAuthenticated && this.messageQueue.length > 0) {
      for (const req of this.messageQueue) {
        this.sendToTrade(req.requestType, req.api, req.param);
      }
      this.messageQueue = [];
    }
  }

  /**
	 * Send Requests to Trade TRS
	 * @param {object} req - TradeRequest object
	 */
  private sendToStreaming<G, T>(req: TradeRequest<G, T>): void {

    // const channel = this.tradeUserDataStore.userEntity.nativeCommunicationChannel ?
    //   this.tradeUserDataStore.userEntity.nativeCommunicationChannel : 7; // DeviceState.getInstance().channel;
    req.channelId = 7;
    req.clientVersion = 'ss'; // DeviceState.getInstance().deviceClientVersion();
    req.sessionId = UserState.getInstance().getTradeDetails().SESN_ID;
    req.userId = UserState.getInstance().getTradeDetails().userId;
    req.language = this.language.getshortCode(this.language.activeLanguageCode);

    this.network.sendToWs(this.tradeStreamingRequestHandler.generateTradeRequest(req), req.isAuthRequest);
  }
}
