
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { ThemeService } from '../../../../../app/app-utils/theme.service';
import {DataService} from '../../app-backend/communication/data.service';
import {environment} from '../../../environments/environment';
import {Languages} from '../../app-constants/enums/languages.enum';
import {ConfigService} from '../../app-config/config.service';
import {LocalizationService} from '../../app-utils/localization/localization.service';
import {BackOfficeAuthService} from "../../app-backend/auth/bo.auth.service";
// import {AuthService} from '../../app-backend/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public userName = '';
  public password = '';
  public responseMessage = '';
  public rejectReason = '';
  public rememberMe = false;
  public disableLoginButton = false;
  public isAuthenticating = false;
  public callCenterNo = '';
  public callCenterEmail = '';
  public appVersion = 'N/A';
  public customization = 'N/A';
  public env = 'N/A';

  constructor(
    private router: Router,

    private boAuthService: BackOfficeAuthService,
    public localizationService: LocalizationService, // private
    private configService: ConfigService,
    private dataService: DataService,
    // private cacheService: CacheAtService,
    // private themeService: ThemeService,
  ) {
    this.configService.getStringConfigVal('buildParams', 'version').then(applicationVersion => {
      this.appVersion = applicationVersion;
    });

    this.configService.getStringConfigVal('buildParams', 'customization').then(atCustomization => {
      this.customization = atCustomization;
    });

    this.env = environment.production ? 'PROD' : 'DEBUG';

    this.configService.getStringConfigVal('customizationConfigs', 'callCenterPhone').then(phone => {
      this.callCenterNo = phone;
    });

    this.configService.getStringConfigVal('customizationConfigs', 'callCenterEmail').then(email => {
      this.callCenterEmail = email;
    });
    // this.cacheService.get({ token: 'username' }).subscribe(
    // 	username => {
    // 		if (username) {
    // 			this.userName = username;
    // 			this.rememberMe = true;
    // 		}
    // 	});
  }

  /**
	 * This method bind with login button
	 */
  public login(): void {
    if (this.validateUserInputs()) {

      // Do Authenticate
      this.disableLoginButton = true;
      this.responseMessage = 'Authenticating....';

      // this.authenticateUser();
    }
  }

  /**
	 * Change application active language
	 */
  public changeLanguage(): void {
    if (this.localizationService.activeLanguageCode === Languages.ENGLISH) {
      this.localizationService.activeLanguageCode = Languages.ARABIC;
    } else {
      this.localizationService.activeLanguageCode = Languages.ENGLISH;
    }
  }

  /**
	 * Validate User Inputs
	 * @returns {Boolean} True if authenticate request is valid to send for back office
	 */
  private validateUserInputs(): boolean {
    if (this.userName === '' || this.password === '') {
      this.disableLoginButton = false;
      this.responseMessage = 'Enter Username & Password';
      return false;
    }

    return true;
  }

  /**
	 * This method invoke back office core logon services to authenticate user
	 */
  private authenticateUser(): void {

    this.boAuthService.authenticateUser(this.userName, this.password);
    this.boAuthService.getAuthStatus().subscribe(msg => {
      if ( msg.isAuthenticated ) {

        this.router.navigateByUrl('welcome');
      }
    });

  }
}
