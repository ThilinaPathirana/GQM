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

  public sideNavWidth = SIDE_BAR_MAX_WIDTH;
  public isSideNavMinimised = false;
  public isDarkTheme = true;
  public sideNavAlignment = 'start';
  public connectionStatusText = 'connectionText';
  public customisation = 'N/A';
  public connectionStatusClass = 'connectionStatusClass';
  public mainMenuItems = [];
  public menuOpen = true;
  public selectedItems = [];
  public selectedId = [];
  public selectedEnable = [true, false, false, false];
  @ViewChild('dialog') public dialogRef: ElementRef;
  @ViewChild('breadcrumb') public breadcrumbRef: ElementRef;

  public appVersion = 'N/A';
  public customization = 'N/A';
  public env = 'N/A';
  // public mainMenuItems: Array<any> = [];

  public banklist = 229;
  public exchangeList = 222;
  public commissionGroupList = 262; // recheck
  public pendingCommissionChangesList = 264;

  private SUPER_ADMIN_ENTITLEMENT = 42;

  private activeListItem: any;
  private activeCheckboxElem: any;

  // private themeService: ThemeService;

  public constructor(private router: Router,private route: ActivatedRoute) {
  }

  public onBreadCrumClick(id: number): void {
    this.menuOpen = true;
  }

  public selectItem(level: number, id: number): void {
    if (this.selectedItems[level][id].sub && this.selectedItems[level][id].sub.length !== 0) {

      for (let x = 0; x < 4; x++) {
        this.selectedEnable[x] = x <= level + 1;
      }
      if (level === this.selectedItems.length - 1) {
        this.selectedItems.push(this.selectedItems[level][id].sub);
        this.selectedId.push(id);
      } else {
        this.selectedItems[level + 1] = this.selectedItems[level][id].sub;
        this.selectedId[level] = id;
        this.selectedId = this.selectedId.slice(0, level + 1);
      }
    } else {
      this.router.navigate([this.selectedItems[level][id].link], { relativeTo: this.route }).then(() => {
        this.menuOpen = false;
      });
    }

  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  public clickOutsideDetect(event: any): void {
    if (this.dialogRef && !this.dialogRef.nativeElement.contains(event.target) &&
      !this.breadcrumbRef.nativeElement.contains(event.target)) { // or some similar check
      this.menuOpen = false;
    }
  }

  public callFromWrapper(value: any): any {
    if (value === this.banklist) {
      this.router.navigateByUrl('/at/bank-list');
    }
    if (value === this.exchangeList) {
      this.router.navigateByUrl('/at/exchange-list');
    }
    if (value === this.commissionGroupList) {
      this.router.navigateByUrl('/at/commission-group-list-view-list');
    }
    if (value === this.pendingCommissionChangesList) {
      this.router.navigateByUrl('at/pending-commission-changes-list-view-list');
    }
  }

  public changeSideNavWidth(): void {
    if (this.isSideNavMinimised) {
      this.sideNavWidth = SIDE_BAR_MAX_WIDTH;
      this.isSideNavMinimised = false;
    } else {
      this.sideNavWidth = SIDE_BAR_MIN_WIDTH;
      this.isSideNavMinimised = true;
    }
  }

  public openHelp(): void {
    // this.panelButtonClicked();
    // Open help
  }

  public changeLanguage(): void {
    // this.localizationService.changeLanguage();
    // this.setSideNavOrientation();
    this.panelButtonClicked();
  }

  // public changeTheme(): void {
  // 	this.themeService.changeThemeFromPref();
  // }

  public openSettings(): void {
    // Open Settings
    this.panelButtonClicked();
  }

  public openInquiry(): void {
    // const dialogRef = this.dialog.open(HelpAndSupportComponent, {
    // 	height: 'auto',
    // 	width: '600px',
    // 	panelClass: 'no-border-page-wrapper',
    // });
  }

  public panelButtonClicked(item?: any, isMainNav?: boolean): void {
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
    if (!item.sub) {
      this.router.navigate(item.url);
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

  public sideNavLinkClick(): void {
    // hjg
  }

  /**
   * Populate main menu according to given granted entitlement list
   *
   * @param {array} userGrantedEntitlements - logged in user granted entitlement id list
   */
  private populateMenu(userGrantedEntitlements: Array<number>): void {
    MENU_METADATA.forEach(val => {
        const newMenu = {
          name: val['text'],
          color: val['colorCode'],
          sub: [],
        };
        if (val['sub']) {
          val['sub'].forEach(l1 => {
            const subItem = {
              name: l1['text'],
              link: l1['link'],
              sub: [],
            };

            if (l1['sub']) {
              l1['sub'].forEach(subRI => {
                subItem.sub.push({
                  name: subRI['text'],
                  link: subRI['link'],
                });
              });
            }
            newMenu.sub.push(subItem);
          });
        }
        this.mainMenuItems.push(newMenu);
    });
  }

  /**
   * Verify given number contains in the given number list
   *
   * @param {Array} grantedEntitlementsList - sorted searching list
   * @param {number} entitlementId - searching entity
   * @returns {boolean} true if given number contains in given number list. Otherwise return false
   */
  private isAvailable(grantedEntitlementsList: Array<number>, entitlementId: number): boolean {
    let low = 0;
    const size = grantedEntitlementsList.length;
    let high = size - 1;
    while (high >= low) {
      const middle = Math.floor((low + high) / 2);
      if (grantedEntitlementsList[middle] === entitlementId) {
        return true;
      }
      if (grantedEntitlementsList[middle] < entitlementId) {
        low = middle + 1;
      }
      if (grantedEntitlementsList[middle] > entitlementId) {
        high = middle - 1;
      }
    }
    return false;
  }

}
