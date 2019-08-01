import { WidgetTypes } from '../app-constants/enums/widget-types.enum';
import {Languages} from '../app-constants/enums/languages.enum';

export const userSettings = {

  presentation: {
    // defaultTheme: Themes.LIGHT,
    defaultLanguage: Languages.ENGLISH,
    defaultFontSize: 12,
  },

  defaultWidget: {
    web: WidgetTypes.home,
    // ios: WidgetTypes.WatchList,
    // android: WidgetTypes.StockProfile,
  },

  webMenuItems: [
    {
      id: WidgetTypes.home,
      config: {
        tooltips: 'Master List',
        url: 'DocumentControl/MasterList',
        icon: 'fa fa-home',
      },
    },
    {
      config: {
        tooltip: 'Document Control',
        icon: 'fa fa-book',
      },
      subItems: [
        {
          id: WidgetTypes.TopLevelManuals,
          config: {
            tooltip: 'Top Level Manuals',
            url: 'DocumentControl/TopLevelManuals',
            icon: 'fa fa-table',
          },
        },
        {
          id: WidgetTypes.Procedures,
          config: {
            tooltip: 'Procedures',
            url: 'DocumentControl/Procedures',
            icon: 'fa fa-table',
          },
        },
        {
          id: WidgetTypes.WorkInstructions,
          config: {
            tooltip: 'Work Instructions',
            url: 'DocumentControl/WorkInstructions',
            icon: 'fa fa-table',
          },
        },
        {
          id: WidgetTypes.Records,
          config: {
            tooltip: 'Production Records',
            url: 'DocumentControl/ProductionRecords',
            icon: 'fa fa-table',
          },
        },
        // {
        //   id: WidgetTypes.ChangeDocumentOrRecord,
        //   config: {
        //     tooltip: 'Change Document Or Record',
        //     url: 'DocumentControl/ChangeDocORRecord',
        //     icon: 'uni-portfolio',
        //   },
        // },
        // {
        //   id: WidgetTypes.DocOrRecReviewUpdateProcess,
        //   config: {
        //     tooltip: 'Doc Review Update Process',
        //     url: 'DocumentControl/DocReviewUpdateProcess',
        //     icon: 'uni-portfolio',
        //   },
        // },
        // {
        //   id: WidgetTypes.Reports,
        //   config: {
        //     tooltip: 'Reports',
        //     url: 'DocumentControl/Reports',
        //     icon: 'uni-portfolio',
        //   },
        // },
      ],
    },
    {
      config: {
        tooltip: 'MRM Meeting',
        icon: 'fa fa-users',
      },
      subItems: [
        {
          id: WidgetTypes.AddMrmMeeting,
          config: {
            tooltip: 'Add Meeting Record',
            url: 'MRMmeeting/AddMeetingRecord',
            icon: 'fa fa-plus-square',
          },
        },
      ],
    },
    {
      config: {
        tooltip: 'Incident/Complain Note',
        icon: 'fa fa-warning',
      },
      subItems: [
        {
          id: WidgetTypes.ComplainNote,
          config: {
            tooltip: 'Complain Note',
            url: 'IncidentComplain/ComplainNote',
            icon: 'fa fa-upload',
          },
        },
      ],
    },
    {
      id: WidgetTypes.scope,
      config: {
        tooltip: 'Scope',
        // url: 'Scope',
        icon: 'fa fa-eye',
      },
      subItems: [
        {
          id: WidgetTypes.home,
          config: {
            tooltip: 'Add Scope',
            url: 'Scope',
            icon: 'fa fa-upload',
          },
        },

        {
          id: WidgetTypes.home,
          config: {
            tooltip: 'View Scope',
            url: 'Scope/viewScope',
            icon: 'fa fa-desktop',
          },
        },
      ]
    },
    {
      id: WidgetTypes.policy,
      config: {
        tooltips: 'Policy',
         url: 'policy',
        icon: 'fa fa-star',
      },
    },
    {
      id: WidgetTypes.training,
      config: {
        tooltips: 'Training',
         url: 'Training',
        icon: 'fa fa-university',
      },
    },
    // {
    //   id: WidgetTypes.home,
    //   config: {
    //     tooltips: 'Production Records',
    //     url: 'home',
    //     icon: 'uni-my-account',
    //   },
    // },
    {
      id: WidgetTypes.home,
      config: {
        tooltips: 'Payments/Financial',
        url: 'DocumentControl/MasterList',
        icon: 'fa fa-money',
      },
    },
    {
      id: WidgetTypes.home,
      config: {
        tooltips: 'Staffs Data',
        url: 'DocumentControl/MasterList',
        icon: 'fa fa-database',
      },
    },
    // {
    //   id: WidgetTypes.home,
    //   config: {
    //     tooltips: 'Incident Report',
    //     url: 'home',
    //     icon: 'uni-my-account',
    //   },
    // },
  ],

  // Working Instruction DropDown List
  workingInstrItems: [
    {
      config: {
        tooltip: 'Ware House',
        icon: 'uni-my-account',
      },
      subItems: [
        {
          id: WidgetTypes.TopLevelManuals,
          config: {
            tooltip: 'Fork Life Operation',
            url: 'home',
            icon: 'uni-portfolio',
          },
        },
        {
          id: WidgetTypes.WorkInstructions,
          config: {
            tooltip: 'Quality Check',
            url: 'WorkInstructions',
            icon: 'uni-portfolio',
          },
        },
        {
          id: WidgetTypes.Records,
          config: {
            tooltip: 'Item Segregation',
            topic: 'පහත ක්‍රියාමාර්ග පිළිපදින්න',
            icon: 'uni-portfolio',
            Instruction : [
              {Ins: '1. production අංශයන'},
              {Ins: '2. Item Code එ පෙට්ටි ගණන වෙන් කරගන්න'},
              {Ins: '3. Databුරු Update කරන්න'},
              {Ins: '4. ලබනන ගන්න'},
              {Ins: '5. Itකරන්න'}
            ]
          },
        },
        {
          id: WidgetTypes.ChangeDocumentOrRecord,
          config: {
            tooltip: 'Release to Production',
            topic: 'පහත ක්‍රියාමාර්ග පිළිපදින්න',
            icon: 'uni-portfolio',
            Instruction : [
              {Ins: '1. production අංශයේ Request chit එක බලන්න'},
              {Ins: '2. Item Code එකට අනුව අවශ්‍ය පෙට්ටි ගණන වෙන් කරගන්න'},
              {Ins: '3. Database එකේ තොරතුරු Update කරන්න'},
              {Ins: '4. ලබන්නාගේ අත්සන ගන්න'},
              {Ins: '5. Item නිකුත් කරන්න'}
            ]
          },
        },
      ],
    },
    {
      config: {
        tooltip: 'Cutting',
        icon: 'uni-my-account',
      },
      subItems: [
      ],
    },
    {
      config: {
        tooltip: 'Packing',
        icon: 'uni-my-account',
      },
      subItems: [
      ],
    },
    {
      config: {
        tooltip: 'Stitching',
        icon: 'uni-my-account',
      },
      subItems: [
      ],
    },
    {
      config: {
        tooltip: 'Staff Health',
        icon: 'uni-my-account',
      },
      subItems: [
      ],
    },
    {
      config: {
        tooltip: 'Health & Safety',
        icon: 'uni-my-account',
      },
      subItems: [
      ],
    },
  ],
};
