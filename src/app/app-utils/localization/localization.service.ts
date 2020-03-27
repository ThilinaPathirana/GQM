import { AR } from './translations';
import { EN } from './translations';
import { Injectable } from '@angular/core';
import { Languages } from '../../app-constants/enums/languages.enum';
import { NotificationService } from '../notification.service';
import { NotificationType } from '../../app-constants/enums/notification-types.enum';
import { userSettings } from '../../app-config/user-settings';

@Injectable()
export class LocalizationService {

  public supportedLanguages = {
    EN: { shortCode : 'EN', langObj: EN, layout: 'ltr' , des : 'English' },
    AR: { shortCode : 'AR', langObj: AR, layout: 'rtl' , des : '\u0639\u0631\u0628\u0649' },
  };

  private _language: any;
  private _contentDisplayFlag: string;
  private _activeLanguageCode: Languages;
  private layout: string;

  constructor(public notificationService: NotificationService) {
    this.activeLanguageCode = userSettings.presentation.defaultLanguage;
    this.contentDisplayFlag = '2'; // Both
  }

  public set activeLanguageCode(value: Languages) {
    if (this._activeLanguageCode === value) {
      return;
    }

    this._activeLanguageCode = value;
    this.language = this.supportedLanguages[value].langObj;
    this.layout = this.supportedLanguages[value].layout;
    this.setOrientationClass();
  }

  public get activeLanguageCode(): Languages {
    return this._activeLanguageCode;
  }

  public set language(value: any) {
    this._language = value;
  }

  public get language(): any {
    return this._language;
  }

  public getLongDesc(value?: Languages): string  {
    let param = value;
    if (!param) {
      param = this._activeLanguageCode;
    }

    return this.supportedLanguages[param].des;
  }

  public getOtherLongDesc(): string  {
    let lan = Languages.ENGLISH;
    if (this.activeLanguageCode === Languages.ENGLISH) {
      lan = Languages.ARABIC;
    } else {
      lan = Languages.ENGLISH;
    }

    return this.supportedLanguages[lan].des;
  }

  public get contentDisplayFlag(): string {
    return this._contentDisplayFlag;
  }

  public set contentDisplayFlag(value: string) {
    this._contentDisplayFlag = value;
  }

  public getshortCode(value?: Languages): string  {
    let param = value;
    if (!param) {
      param = this._activeLanguageCode;
    }

    return this.supportedLanguages[param].shortCode;
  }

  public isRTL(): boolean {
    return this.layout === 'rtl';
  }

  public isAR(): boolean {
    if (this._activeLanguageCode === Languages.ARABIC) {
      return true;
    } else {
      return false;
    }
  }

  public changeLangFromPref(newCode?: string): void {
    if (this.supportedLanguages[newCode] && this.supportedLanguages[newCode] !== this.activeLanguageCode) {
      this.activeLanguageCode = this.supportedLanguages[newCode].shortCode;
      this.notificationService.notify(NotificationType.LanguageChange, this.activeLanguageCode);
    }
  }

  public changeLanguage(): void {
    if (this.activeLanguageCode === Languages.ENGLISH) {
      this.activeLanguageCode = Languages.ARABIC;
    } else {
      this.activeLanguageCode = Languages.ENGLISH;
    }

    this.notificationService.notify(NotificationType.LanguageChange, this.activeLanguageCode);
  }

  private setOrientationClass (): void {
    const body = document.getElementsByTagName('body')[0];

    // remove the old class if available
    if (this._activeLanguageCode === Languages.ENGLISH) {
      body.classList.remove('ar');
      body.classList.add('en');
    } else {
      body.classList.remove('en');
      body.classList.add('ar');
    }
  }
}
