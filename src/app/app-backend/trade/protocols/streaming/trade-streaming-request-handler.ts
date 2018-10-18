import { Channels } from '../../../../app-constants/enums/channels.enum';
import { Data } from '../../../communication/data';
// import { DeviceState } from '../../../../app-config/device-state';
import { SubscriptionRequestTypes } from '../../../../app-constants/enums/trade-meta/subscription/subscription-request-types.enum';
import { SystemRequestTypes } from '../../../../app-constants/enums/trade-meta/system/system-request-types.enum';
import { TradeMetaGroups } from '../../../../app-constants/enums/trade-meta/trade-meta-groups.enum';
import { TradeRequest } from '../trade-request';
import { UserState } from '../../../auth/user-state';

export class TradeStreamingRequestHandler {
  private static _instance: TradeStreamingRequestHandler = new TradeStreamingRequestHandler();

  public static getInstance(): TradeStreamingRequestHandler {
    return TradeStreamingRequestHandler._instance;
  }

  constructor() {
    if (TradeStreamingRequestHandler._instance) {
      throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
    }

    TradeStreamingRequestHandler._instance = this;
  }

  public generatePulseRequest(): Data {
    const req = new TradeRequest<TradeMetaGroups.System, SystemRequestTypes.Pulse>();
    req.messageGroup = TradeMetaGroups.System;
    req.messageType = SystemRequestTypes.Pulse;
    req.channelId = 7;
    req.sessionId = UserState.getInstance().getTradeDetails().SESN_ID;

    return this.generateTradeRequest(req);
  }

  public generateTradeRequest<G, T>(request: TradeRequest<G, T>): Data {
    const jsonReqData = {
      HED: {
        MSG_GRP: request.messageGroup,
        MSG_TYP: request.messageType,
        CHANNEL: '7',
        CL_VAR: 'WEBAT_1.0',
        SESSION: '',
        CL_IP: '192.168.20.132',
      },
      DAT: this.generateTradeRequestBody(request),
    };
    const jsonRequest = {
      channel : Channels.BackOffice,
      data : JSON.stringify(jsonReqData),
    };
    return jsonRequest;
  }

  private generateTradeRequestBody<G, T>(request: TradeRequest<G, T>): any {
    const reqBody = {
      UN: request.loginName,
      ENC_TYP: request.encodingType,
      PWD: request.password,
      MAST_ACC_NUM: request.masterAccountNumber,
      // Below duplication is there because, OMS is having different tags to denote institution id. So for client application to build
      // the request and responses in a generic way, we had to duplicate it.
      LANG: request.language,
      OLD_PWD: request.oldLoginPassword,
      NEW_PWD: request.newLoginPassword,
      OLD_TX_PWD: request.oldTransactionPassword,
      NEW_TX_PWD: request.newTransactionPassword,
      CHG_PWD_TYP: request.changePasswordType,
    };
    return reqBody;
  }

  private convertContactInfo(fieldsObj: any): any {
    if (fieldsObj !== undefined) {
      return [{
        CNTCT_TYP: 1,
        HM_PHN_NO: fieldsObj.primaryMobile,
      }, {
        CNTCT_TYP: 2,
        OFF_TEL_NO: fieldsObj.officeTel,
        HM_PHN_NO: fieldsObj.homeTel,
      }, {
        CNTCT_TYP: 3,
        HM_PHN_NO: fieldsObj.email,
      }, {
        CUS_STRT: fieldsObj.addressLine1 + ' ' + fieldsObj.addressLine2,
        CUS_CTRY: fieldsObj.country,
      }];
    }
  }

  private convertExchangeDetails(fieldsObj: any): any {
    if (fieldsObj !== undefined) {
      return [{
        PKG_ID: fieldsObj.packageID,
        DESC: fieldsObj.packageDescription,
        EXG_ACC_LST: this.convertToExchangeObj(fieldsObj.exchangeAccountList),
      }];
    }
  }

  private convertToExchangeObj(exgObj: any): any {
    if (exgObj !== undefined) {
      const exgList = [];
      for (const item of exgObj) {
        const obj = {
          EXG: item.exchange,
          DFLT_FD_LVL: item.defaultFeedLevel,
        };
        exgList.push(obj);
      }
      return exgList;
    }
  }
}
