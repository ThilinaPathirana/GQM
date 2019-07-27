export enum TimerIntervals {
	authTimeoutInterval = 5000, // 5 * 1000
	serverLogUploadInterval = 5000, // 1 * 1000
	heartbeatInterval = 30000, // 30 * 1000
	baseReconnectInterval = 1000,
	idleTimeOut = 900000, // 15 * 60 * 1000
	searchTimeOut = 300,
	OrderPriceQtyAutoUpdateTimeOut = 1500,
	topStocks = 300000, // 5 * 60 * 1000
	portfolioWidgets = 30000, // 30 * 1000;
	NotificationUnsubcribe = 1000,
	PriceRequest = 5000, // 30 * 1000
	SnakBarTimeout = 10000,
	Verification = 1000,
	ResetPassword = 3000,
	OrderStatusUpdateWaitPeriod = 5000,
	OrderStatusShowDuration = 3000, // 3*1000
	OrderTicketDismissDuration = 3000,
	OrderConfirmationDismissDuration = 2000,
	TradeCancelPopupDisplayDuration = 2000, // 2 * 1000
	OrderEntityClearDuration = 2000, // 2 * 1000
	WidgetResolverTimeout = 5000, // 5 * 1000

	// Martket Sector
	SectorSummaryChartUpdateDelay = 500,
	SectorSummaryChartDataThrottleTime = 5000,

	// Help and Support
	SuccessMessageDuration = 5000,
}
