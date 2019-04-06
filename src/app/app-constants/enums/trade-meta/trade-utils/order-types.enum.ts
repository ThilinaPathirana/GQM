export enum OrderTypes {
  Normal = '0' ,
  Market = '1' ,
  Limit = '2' ,
  Stop = '3' ,
  StopLimit = '4' ,
  MarketOnClose = '5' ,
  MarketOnOpen = 'S' ,
  Kie = 'Q' ,
  Kpy = 'R' ,
  MarketBestPrice = 'N' ,
  LimitOnClose = 'B' ,
  DayMarket = 'a' ,
  DayLimit = 'b' ,
  SquareOff = 'c' ,
  TrailingStopLossLimit = 'y' ,
  TrailingStopLossMarket = 'z' ,
  COnditionalOrder = 'e' ,
  CancelIfNotExcuted = '8' ,
}