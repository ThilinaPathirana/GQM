import { WidgetTypes } from '../app-constants/enums/widget-types.enum';

export const userSettings = {

  defaultWidget: {
    web: WidgetTypes.home,
    // ios: WidgetTypes.WatchList,
    // android: WidgetTypes.StockProfile,
  },

  webMenuItems: [
    {
      id: WidgetTypes.home,
      config: {
        tooltips: 'Dashboard',
        url: 'home',
        icon: 'fa fa-dashboard',
      },
    },
    {
      config: {
        tooltip: 'Documents',
        icon: 'uni-my-account',
      },
      subItems: [
        {
          id: WidgetTypes.Portfolio,
          config: {
            tooltip: 'doc',
            url: 'home2',
            icon: 'uni-portfolio',
          },
        },
      ],
    },
    {
      config: {
        tooltip: 'Tab2',
        icon: 'uni-my-account',
      },
      subItems: [
        {
          id: WidgetTypes.OneStopTrade,
          config: {
            tooltip: 'tab',
            url: 'home3',
            icon: 'uni-portfolio',
          },
        },
      ],
    },
  ],
};
