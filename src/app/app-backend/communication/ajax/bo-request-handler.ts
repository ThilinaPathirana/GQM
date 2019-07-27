import { ATCacheTypes } from '../../../app-constants/enums/at-cache-type.enum';
import { BoMessageGroups } from '../../../app-constants/enums/bo-message-groups.enum';
import { BoMessageTypes } from '../../../app-constants/enums/bo-message-types.enum';
import { BoRequest } from '../protocols/bo-request';
import {Data} from "@angular/router";
import {Channels} from "../../../app-constants/enums/channels.enum";

/**
	* Generate a request object for back office service
	* Created by MalakaD on 8/18/2017.
	*/
export class BackOfficeRequestHandler {

	/**
		* request generate function
		* @param {BoMessageGroups} group - message group
		* @param {BoMessageTypes} type - message type
		* @param {any} data - DAT part of the request
		* @param {ATCacheTypes} cacheType - back-office request type.
		* @param {boolean} appendSessionId - [default true] condition to append session id to the request
		* @returns {BoRequest} newly generated BO request
		*/
	public static getRequest(group: BoMessageGroups, type: BoMessageTypes, data: any, cacheType: ATCacheTypes, appendSessionId: boolean = true): Data {
		const reqdata = new BoRequest();
		reqdata.HED.MSG_GRP = group;
		reqdata.HED.MSG_TYP = type;
		if (appendSessionId) {
			reqdata.HED.SESSION = 2;
		}
		reqdata.DAT = data;
		reqdata.cacheType = cacheType;

		const req  = {
			channel : Channels.BackOffice,
			// data : JSON.stringify(reqdata),
            data : reqdata,
		};
		return req;
	}

	/**
		* generate an ajax request
		* @param {any} data - Back-office request body
		* @returns {{method: string, url: string, body: any}} - ajax request
		*/
	public static getAjaxAtRequest(data: any): any {
		return {
			method: 'POST',
			url: 'http://18.222.164.207:8080/gts-back-office/services/gtsServices', //http://localhost:8082/gts-back-office/services/gtsServices
			body: data.data,
		};
	}
}
