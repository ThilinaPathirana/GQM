import { ChangeDetectorRef, Component, Injector  } from '@angular/core';
import {Router} from '@angular/router';
import {userSettings} from '../../app-config/user-settings';

const SIDE_BAR_MIN_WIDTH = 64;
const SIDE_BAR_MAX_WIDTH = 210;
const SEVEN_DAYS = 604800000; // 7 * 24 * 3600 * 1000
const POPUP_DELAY = 5000; // 5 * 1000;
const POPUP_DISPLAY_DELAY = 2000; // 2 * 1000;
const LAST_VERIFICATION_POPUP_TIME = 'lastVerificationPopupTime';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
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

  public onInit(): void {
    // super.onInit();
    // this.subscribeForGlobalSearchConfig();
    this.listenOnNavigationChange();

  }

  public onViewAppear(): void {
   //  super.onViewAppear();
    // validate and display terms and conditions agreement
    setTimeout(() => {   // [TODO]-Thakshila added this in timeout to resolve open bug in MatDialog
      this.showPopups();		//  Validate and remove after bug fix
    }, POPUP_DISPLAY_DELAY);
  }

  public openHelp(): void {
    // this.panelButtonClicked();
    // Open help
  }

  public changeLanguage(): void {
    // this.localizationService.changeLanguage();
    // this.setSideNavOrientation();
    // this.panelButtonClicked();
  }

  public changeTheme(): void {
    // this.themeService.changeThemeFromPref();
  }

  public openSettings(): void {
    // Open Settings
    this.panelButtonClicked();
  }

  public openInquiry(): void {
    // const dialogRef = this.dialog.open(HelpAndSupportComponent, {
    //   height: 'auto',
    //   width: '600px',
    //   panelClass: 'no-border-page-wrapper',
    // });
  }

  public logoutApplication(): void {
    // this.authService.logOut();
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
    // // TODO: [Amila] review and do below change only for mobiles
    // // if (item && item.config && !item.config.url) {
    // // 	return;
    // // }
    //
    // if (DeviceState.getInstance().breakPoint === Breakpoint.xs
    //   || DeviceState.getInstance().breakPoint === Breakpoint.md
    //   || DeviceState.getInstance().breakPoint === Breakpoint.sm) {
    //   this.changeSideNavWidth();
    // }
    // if (isMainNav) {
    //   if (this.activeListItem && this.activeListItem.active) {
    //     this.activeListItem.active = false;
    //   }
    //   item.active = true;
    //   this.activeListItem = item;
    // }
    // if (!item.subItems) {
    //   this.navigationService.navigateToRootView(item.id);
    // }
  }


  public listenOnNavigationChange(): void {
    // this.notificationService.listen(NotificationType.WidgetNavigation, (widget) => {
    //   this.isBackButtonVisible = this.navigationService.isNavStackEmplty();
    //   this.changeDetectorRef.detectChanges();
    // });
  }

  public navigateBack(index: number): void {
    // if (index < this.navigationService.navWidgetStack.length - 1) {
    //   this.navigationService.backToParent(index);
    // }
  }

  private showPopups(): void {
    // if (!this.tradeHelperService.isAgreementSigned()) {
    //   const data = {
    //     operatingMode: ServiceNotificationTypes.ServiceAgreement, // service agreement mode
    //     title: this.localizationService.language.SERVICE_AGREEMENT_TITLE,
    //     agreement: this.localizationService.language.SERVICE_AGREEMENT,
    //   };
    //   this.popupDialogRef = this.dialog.open(ServiceNotificationComponent, { width: '500px', data: data, panelClass: 'no-border-page-wrapper' });
    //
    //   this.popupDialogRef.afterClosed().subscribe(result => {
    //     if (this.tradeHelperService.isAgreementSigned()) {
    //       this.validateCustomerVerification();
    //     } else {
    //       this.authService.logOut();
    //     }
    //   });
    //
    // } else {
    //   // request for new service launch
    //   this.tradeService.sendToTrade(TradeRequests.ServiceCampaign, TradeBackends.TRS);
    //   setTimeout(() => {
    //     if (this.tradeHelperService.isNewServiceCampaignAvailable()) {
    //       this.showServiceCampaignPopup();
    //     } else {
    //       this.validateCustomerVerification();
    //     }
    //   }, POPUP_DELAY);
    // }
  }

  private showServiceCampaignPopup(): void {

    // // new service campaign popup
    // const data = {
    //   operatingMode: ServiceNotificationTypes.ServiceCampaign, // service campaign mode
    //   title: this.tradeHelperService.getServiceCampaignInfo().serviceCampaignMessage,
    //   agreement: this.tradeHelperService.getServiceCampaignInfo().serviceCampaignAgreement,
    //   campaignId: this.tradeHelperService.getServiceCampaignInfo().serviceCampaignId,
    // };
    // this.popupDialogRef = this.dialog.open(ServiceNotificationComponent, { width: '500px', data: data, panelClass: 'no-border-page-wrapper' });
    // this.popupDialogRef.afterClosed().subscribe(result => {
    //   this.validateCustomerVerification();
    // });

  }

  private validateCustomerVerification(): void {
    // this.cacheService.get({ token: LAST_VERIFICATION_POPUP_TIME })
    //   .subscribe(
    //     lastPopupTime => {
    //       let needToCheckWithServer = false;
    //       if (lastPopupTime) {
    //         const timeDifference = new Date().getTime() - parseInt(lastPopupTime, 10);
    //         if (timeDifference > SEVEN_DAYS) {
    //           needToCheckWithServer = true;
    //         }
    //       } else {
    //         needToCheckWithServer = true;
    //       }
    //       if (needToCheckWithServer) {
    //         this.tradeService.sendToTrade(TradeRequests.CustomerInformation, TradeBackends.TRS, {});
    //         setTimeout(() => {
    //           if (!UserState.getInstance().isCustomerVerified) {
    //             this.showCustomerVerificationPopup();
    //             this.cacheService.put({
    //               token: LAST_VERIFICATION_POPUP_TIME,
    //               category: CacheCategories.Default,
    //               data: new Date().getTime().toString(),
    //             });
    //             localStorage.setItem(LAST_VERIFICATION_POPUP_TIME, new Date().getTime().toString());
    //           }
    //         }, POPUP_DELAY);
    //       }
    //     },
    //   );
  }

  private showCustomerVerificationPopup(): void {
    // const data = {
    //   title: this.localizationService.language.YOUR_CONTACTS_ARE_NOT_VERIFIED,
    //   content: this.localizationService.language.CONTACT_DETAILS_VERIFY_MSG,
    //   btnLabel1: this.localizationService.language.VERIFY_CONTACT_DETAILS,
    //   btnLabel2: this.localizationService.language.LATER,
    // };
    // const dialogRef = this.dialog.open(DialogBoxComponent, { width: '500px', data: data, panelClass: 'no-border-page-wrapper' });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === DIALOG_OPTION_1) {
    //     this.router.navigate(['preferences'], { relativeTo: this.route, queryParams: { page: 5 }, queryParamsHandling: 'merge' });
    //   }
    // });
  }

  private setSideNavOrientation(): void {
    // this.isRTL = this.localizationService.isRTL();
    //
    // if (this.isRTL) {
    //   this.sideNavAlignment = 'end';
    // } else {
    //   this.sideNavAlignment = 'start';
    // }
  }

  private listenChannelsConnStatusChanges(): void {
    // this.dataService.status().subscribe(notification => {
    //   this.updateConnectionStatusList(notification);
    // });
  }

  // private customizeMenuItems(): void {
  //   for (let i = 0; i < userSettings.configurableMenuItems.length; i++) {
  //     switch (userSettings.configurableMenuItems[i].configItem) {
  //       case ConfigurableMenuItems.AUTO_TRADE:
  //         if (!this.tradeHelperService.isTradeWindowTypeAllowed(TradeWindowTypes.AUTO_TRADE, TradeWindowEnableStatus.NOT_ALLOWED)) {
  //           this.menuItems = this.menuItems.concat(userSettings.configurableMenuItems[i]);
  //         }
  //         break;
  //       case ConfigurableMenuItems.STORE:
  //         if (!this.tradeHelperService.isTradeWindowTypeAllowed(TradeWindowTypes.STORE, TradeWindowEnableStatus.NOT_ALLOWED)) {
  //           this.menuItems = this.menuItems.concat(userSettings.configurableMenuItems[i]);
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }

  // private subscribeForGlobalSearchConfig(): void {
  //   this.notificationService.listen(NotificationType.GlobalSearchConfigChange, (globalSearchConfig) => {
  //     if (globalSearchConfig) {
  //       this.globalSearchParams = {
  //         token: this.globalSearchParams.token,
  //         isSymbolSearchEnable: globalSearchConfig.isSymbolSearchEnable,
  //         isNewsSearchEnable: globalSearchConfig.isNewsSearchEnable,
  //         exchangeList: globalSearchConfig.exchangeList,
  //       };
  //     }
  //   });
  // }

}
