import {ChangeDetectorRef, Component, ElementRef, HostListener, Injector, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {userSettings} from '../../app-config/user-settings';
import {environment} from '../../../environments/environment';
import {MENU_METADATA} from '../../app-constants/consts/menu-metadata';

const SIDE_BAR_MIN_WIDTH = 64;
const SIDE_BAR_MAX_WIDTH = 210;
const SEVEN_DAYS = 604800000; // 7 * 24 * 3600 * 1000
const POPUP_DELAY = 5000; // 5 * 1000;
const POPUP_DISPLAY_DELAY = 2000; // 2 * 1000;
const LAST_VERIFICATION_POPUP_TIME = 'lastVerificationPopupTime';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public checked = false;
  public isDarkTheme = true;
  public isRTL = true;
  public sideNavAlignment = 'start';
  public appVersion = 'N/A';
  public customisation = 'N/A';
  public env = 'N/A';
  public menuItems: Array<any> = userSettings.webMenuItems;
  public sidenavWidth = SIDE_BAR_MAX_WIDTH;
  public isSideNavMinimised = false;
  public custName = '';
  public connectionStatusClass = '';
  public changeDetectorRef;
  public connectionStatusText = '';
  public router: Router;
  public isBackButtonVisible = false;
  private connectionStatusList = [];
  private connectionStatusObj = {
    connectedText: 'Connected',
    connectedClass: 'green-text',
  };

  private symbolSearchExchangeList: Array<string>;
  private globalSearchParams = {
    token: 'mini-trade',
    isSymbolSearchEnable: true,
    isNewsSearchEnable: false,
    exchangeList: null,
  };
  private activeListItem: any;
  private activeCheckboxElem: any;
  private popupDialogRef;

  constructor(
    private routerr: Router,
  ) {
    this.env = environment.production ? 'PROD' : 'DEBUG';
    this.customizeMenuItems();
  }


  public changeSideNavWidth(): void {
    if (this.isSideNavMinimised) {
      this.sidenavWidth = SIDE_BAR_MAX_WIDTH;
      this.isSideNavMinimised = false;
    } else {
      this.sidenavWidth = SIDE_BAR_MIN_WIDTH;
      this.isSideNavMinimised = true;
    }
  }

  public panelButtonClicked(item?: any, isMainNav?: boolean): void {
    // TODO: [Amila] review and do below change only for mobiles
    // if (item && item.config && !item.config.url) {
    // 	return;
    // }
    if (isMainNav) {
      if (this.activeListItem && this.activeListItem.active) {
        this.activeListItem.active = false;
      }
      item.active = true;
      this.activeListItem = item;
    }
    if (!item.subItems) {
      this.routerr.navigateByUrl( 'gts/' + item.config.url, { skipLocationChange: false });
    }
  }

  public menuItemSelected(checkboxElem: any): void {
    if (this.activeCheckboxElem === checkboxElem) {
      return;
    }

    if (this.activeCheckboxElem && this.activeCheckboxElem.target.checked) {
      this.activeCheckboxElem.target.checked = false;
    }

    if (checkboxElem.target.checked) {
      this.activeCheckboxElem = checkboxElem;
    } else {
      this.activeCheckboxElem = null;
    }
  }
  private customizeMenuItems(): void {
    // for (let i = 0; i < userSettings.configurableMenuItems.length; i++) {
    //   switch (userSettings.configurableMenuItems[i].configItem) {
    //     case ConfigurableMenuItems.AUTO_TRADE:
    //       if (!this.tradeHelperService.isTradeWindowTypeAllowed(TradeWindowTypes.AUTO_TRADE, TradeWindowEnableStatus.NOT_ALLOWED)) {
    //         this.menuItems = this.menuItems.concat(userSettings.configurableMenuItems[i]);
    //       }
    //       break;
    //     case ConfigurableMenuItems.STORE:
    //       if (!this.tradeHelperService.isTradeWindowTypeAllowed(TradeWindowTypes.STORE, TradeWindowEnableStatus.NOT_ALLOWED)) {
    //         this.menuItems = this.menuItems.concat(userSettings.configurableMenuItems[i]);
    //       }
    //       break;
    //     default:
    //       break;
    //   }
    // }
  }

  private subscribeForGlobalSearchConfig(): void {
  }
}
