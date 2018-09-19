import { WidgetTypes } from '../app-constants/enums/widget-types.enum';

export const userSettings = {

  defaultWidget: {
    web: WidgetTypes.OneStopTrade,
    // ios: WidgetTypes.WatchList,
    // android: WidgetTypes.StockProfile,
  },

  webMenuItems: [
    {
      config: {
        tooltip: 'TRADING_CONSOLE',
        url: 'one-stop-trade',
        icon: 'uni-trade',
      },
    },
    {
      config: {
        tooltip: 'TRADING_ACCOUNT',
        icon: 'uni-my-account',
      },
      subItems: [
        {
          id: WidgetTypes.Portfolio,
          config: {
            tooltip: 'PORTFOLIO',
            url: 'portfolio',
            icon: 'uni-portfolio',
          },
        },
      ],
    },
  ],
};
