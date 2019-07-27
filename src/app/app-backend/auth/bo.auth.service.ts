import { ATCacheTypes } from '../../app-constants/enums/at-cache-type.enum';
import { BackOfficeRequestHandler } from '../communication/ajax/bo-request-handler';
import { BoMessageGroups } from '../../app-constants/enums/bo-message-groups.enum';
import { BoMessageTypes } from '../../app-constants/enums/bo-message-types.enum';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {AjaxService} from '../communication/ajax/ajax.service';
import {DataService} from '../communication/data.service';

interface AuthStatus {
	isAuthenticated: boolean;
	responseMessage: string;
	rejectReason: string;

}

@Injectable()
export class BackOfficeAuthService {

	public currentUser: any; // have to add getters and setters
	private redirectUrl: string;
	private _authStatus: Subject<AuthStatus>;

	private boResponse: any;
	constructor(private ajaxService: AjaxService, private router: Router, private dataService: DataService) {
	}


    public getAuthStatus(): Subject<any> {
        return this._authStatus;
    }

    public authenticateUser(username: string, password: string): void {
		this._authStatus = new Subject();

		// create back-office login request
		const loginData = {
			UN: username,
			PWD: password.toString(),
		};
		this.currentUser = loginData;
		const authRequest = BackOfficeRequestHandler.getRequest(
			BoMessageGroups.Authentication,
			BoMessageTypes.LoginST,
			loginData,
			ATCacheTypes.NET,
			false,
		);

		this.ajaxService.send(BackOfficeRequestHandler.getAjaxAtRequest(authRequest), false).then(
			(res) => {


				const webAuthResponse: AuthStatus = {
					isAuthenticated: false,
					responseMessage: '',
					rejectReason: '',
				};

				this.boResponse = res.data.response; // no need to JSON parse in new HttpClient service

				if (this.boResponse && this.boResponse.DAT) {
					webAuthResponse.isAuthenticated = this.boResponse.DAT.STATUS === 1;
					webAuthResponse.responseMessage = this.boResponse.DAT.DES;
				} else {
					webAuthResponse.isAuthenticated = false;
					webAuthResponse.responseMessage = 'Something went wrong..!';
				}
				this._authStatus.next(webAuthResponse);

			},
			(error) => {
			},
		);
	}



	public logOut(): void {
	}
}
