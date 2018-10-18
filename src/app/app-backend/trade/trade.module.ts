// import { AccountSummaryDataStore } from './data-stores/account-summary-data-store';
// import { AutoTradeMasterDataStore } from './data-stores/auto-trade-master-data-store';
// import { BaseTradeDataStore } from './data-stores/base-trade-data-store';
import { CommonModule } from '@angular/common';
// import { ExchangeRateDataStore } from './data-stores/exchange-rate-data-store';
import { NgModule } from '@angular/core';
// import { OrderListDataStore } from './data-stores/order-list-data-store';
import { PipesModule } from '../../app-utils/pipes/pipes.module';
// import { PortfolioDataStore } from './data-stores/portfolio-data-store';
// import { TradeMasterDataStore } from './data-stores/trade-master-data-store';
import { TradeRequestPopulater } from './protocols/trade-request-populater';
// import { TradeRequestsDataStore } from './data-stores/trade-requests-data-store';
// import { TradeRestResponseHandlerService } from './protocols/rest/trade-rest-response-handler.service';
import { TradeService } from './trade.service';
import { TradeStreamingResponseHandler } from './protocols/streaming/trade-streaming-response-handler';
// import { TradeUserDataStore } from './data-stores/trade-user-data-store';
// import { WealthPortfolioDataStore } from './data-stores/wealth-portfolio-data-store';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
  ],
  declarations: [],
  providers: [
    // BaseTradeDataStore,
    TradeService,
    TradeStreamingResponseHandler,
    // TradeRestResponseHandlerService,
    // TradeUserDataStore,
    // TradeRequestsDataStore,
    // PortfolioDataStore,
    // AccountSummaryDataStore,
    // ExchangeRateDataStore,
    // OrderListDataStore,
    TradeRequestPopulater,
    // TradeMasterDataStore,
    // AutoTradeMasterDataStore,
    // WealthPortfolioDataStore,
  ],
})
export class TradeModule { }
