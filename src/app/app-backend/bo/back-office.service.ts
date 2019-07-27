import {CacheAtService} from '../cache/cache-at.service';
import {Injectable} from '@angular/core';
import {BoMessageGroups} from "../../app-constants/enums/bo-message-groups.enum";
import {BoMessageTypes} from "../../app-constants/enums/bo-message-types.enum";
import {ATCacheTypes} from "../../app-constants/enums/at-cache-type.enum";
import {BackOfficeRequestHandler} from "../communication/ajax/bo-request-handler";
import {Channels} from "../../app-constants/enums/channels.enum";
import {LoggerService} from "../../app-utils/logger.service";


@Injectable()
export class BackOfficeService {
  constructor(private cache: CacheAtService, private loggerService: LoggerService) {

  }

  public registerUser(data): void  {
    this.getBackOfficeData(
      BoMessageGroups.Register,
      BoMessageTypes.Register,
      data,
      ATCacheTypes.NET,
    );
  }

  public addScope(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Scope,
      BoMessageTypes.Add_Scope,
      data,
      ATCacheTypes.NET,
    )
  }

	/**
	 * Generate back office ajax request and send request using caching service
	 *
	 * @param {BoMessageGroups} group - request header message group
	 * @param {BoMessageTypes} type - request header message type
	 * @param {JSON} data - request data in json format
	 * @param {ATCacheTypes} cacheType - request sending cache mode
	 * @returns {JSON} admin terminal back office service response data
	 */
	public getBackOfficeData(group: BoMessageGroups, type: BoMessageTypes, data: any, cacheType: ATCacheTypes): Promise<any> {
		const requestMeta = {
			group,
			type,
			data,
			cacheType,
		};
		return this.sendBackOfficeRequest(requestMeta);
	}
	/**
	 * Process server response before pass into the application
	 *
	 * @param {JSON} boResponse - server response which need to process
	 */
	private processBackOfficeData(boResponse: any): void {

		// this.loggerService.logInfo(boResponse.toString(), 'BoService');

		// Validate for invalid session responses
	}

	/**
	 * Send back office ajax request via cache layer and send back the server response
	 *
	 * @param {any} data - back office request meta data for generate the request
	 * @returns {any} back office response for the request
	 */
	private sendBackOfficeRequest(data: { group: BoMessageGroups, type: BoMessageTypes, data: any, cacheType: ATCacheTypes }): Promise<any> {
		const request = BackOfficeRequestHandler.getRequest(
			data.group,
			data.type,
			data.data,
			data.cacheType);

		const cacheRequest = {
			channel: Channels.BackOffice,
			auth: false,
			data: BackOfficeRequestHandler.getAjaxAtRequest(request),     // for ajax
		};
		return this.cache.ajaxGet(this.cache.generateGetATRequest(cacheRequest));   // for ajax
	}
}
