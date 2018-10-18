import { ConOrderCategories } from '../../../app-constants/enums/trade-meta/trade-utils/con-order-categories.enum';
import { ConOrderStatusTypes } from '../../../app-constants/enums/trade-meta/trade-utils/con-order-status-types.enum';
import { ConditionTypes } from '../../../app-constants/enums/trade-meta/trade-utils/condition-types.enum';
import { Injectable } from '@angular/core';
// import { Order } from '../business-entities/order-entity';
import { OrderCategory } from '../../../app-constants/enums/trade-meta/trade-utils/order-category.enum';
import { OrderSubmissionTypes } from '../../../app-constants/enums/trade-meta/trade-utils/order-submission-types';
import { TradeMetaGroups } from '../../../app-constants/enums/trade-meta/trade-meta-groups.enum';
import { TradingRequestTypes } from '../../../app-constants/enums/trade-meta/trading/trading-request-types.enum';

@Injectable()
export class TradeRequestPopulater {

  // constructor() { // TODO - [Thakshila] add logger service and logs
  // }

  // public populateOrder(request: any, order: Order): any {
  //   request.messageGroup = TradeMetaGroups.Trading;
    // switch (order.orderSubmissionType) {
    //   case OrderSubmissionTypes.NormalOrder:
    //     return this.populateNormalOrder(request, order);
    //   case OrderSubmissionTypes.AmendOrder:
    //     return this.populateAmendOrder(request, order);
    //   case OrderSubmissionTypes.CancelOrder:
    //     return this.populateCancelOrder(request, order);
    //   case OrderSubmissionTypes.ConditionalOrder:
    //     return this.populateConditionalOrder(request, order);
    //   case OrderSubmissionTypes.BracketOrder:
    //     return this.populateBracketOrder(request, order);
    //   case OrderSubmissionTypes.FuturesOrder:
    //     return this.populateFuturesOrder(request, order);
    //   case OrderSubmissionTypes.AmendFuturesOrder:
    //     return this.populateAmendFuturesOrder(request, order);
    //   case OrderSubmissionTypes.CancelFuturesOrder:
    //     return this.populateCancelFuturesOrder(request, order);
    //   case OrderSubmissionTypes.CFDOrder:
    //     return this.populateCFDOrder(request, order);
    //   case OrderSubmissionTypes.AmendCFDOrder:
    //     return this.populateAmendCFDOrder(request, order);
    //   case OrderSubmissionTypes.CancelCFDOrder:
    //     return this.populateCancelCFDOrder(request, order);
    //   case OrderSubmissionTypes.SpotOrder:
    //     return this.populateSpotOrder(request, order);
    //   case OrderSubmissionTypes.AmendSpotOrder:
    //     return this.populateAmendSpotOrder(request, order);
    //   case OrderSubmissionTypes.CancelSpotOrder:
    //     return this.populateCancelSpotOrder(request, order);
    //   default:
    //   // [Todo] Chandana Log error
    // }
  // }
}
