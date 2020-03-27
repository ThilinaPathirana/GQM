import { ATCacheTypes } from '../../app-constants/enums/at-cache-type.enum';
import { BackOfficeAjaxRequest } from '../communication/protocols/bo-ajax-request';
import { BoRequest } from '../communication/protocols/bo-request';
import { Injectable } from '@angular/core';
import {LoggerService} from "../../app-utils/logger.service";
import {Channels} from "../../app-constants/enums/channels.enum";
import {Cacheable} from "./interfaces/cacheable";


/**
	* Generate all cache request for back-office requests.
	*/
@Injectable()
export class CacheRequestAtGenerator {
	private REQ_TO_RES = 1000;

	constructor(private logger: LoggerService) {
	}

	/**
		* Generate a retrieving cache request according to the given data
		* @param {any} request - request data
		* @returns {CacheRequest} - return a cache get request
		*/
	public getATRequest(request: { channel: Channels, data: any}): Cacheable {
		// TODO generic key.
		let key = 'gts_';
		const category = Channels[request.channel];

		this.logger.logInfo(key + ' getATRequest', 'cache-request-generator');
		return { token: key, data: request };
	}

	/**
		* Generate a saving cache request according to the given data
		* @param {any} request - request data
		* @returns {CacheRequest} - return a cache put request
		*/
	public putATRequest(request: { data: BoRequest, channel: Channels }): Cacheable {
		// TODO generic key.
		let key = 'gts_';

		const category = Channels[request.channel];

		this.logger.logInfo(key + ' putATRequest', 'cache-request-generator');
		return { token: key, data: request };
	}
}
