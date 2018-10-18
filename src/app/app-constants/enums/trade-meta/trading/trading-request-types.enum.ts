export enum TradingRequestTypes {
  NormalOrder = 1,
  ConditionalOrder = 3,
  AmendOrder = 7,
  CancelOrder = 12,
  CancelConditionalOrder = 14,
  FuturesOrder = 61,
  AmendFuturesOrder = 63,
  CancelFuturesOrder = 65,
  CFDOrder = 78,
  AmendCFDOrder = 80,
  CancelCFDOrder = 82,
  SpotOrder = 94,
  AmendSpotOrder = 96,
  CancelSpotOrder = 98,
  AutoTradeOrder = 1003,
  AutoTradeAmendOrder,
  AutoTradeCancelOrder,
}
