import { Observable, Subject, Subscriber } from 'rxjs';
import { BackOfficeAjaxRequest } from '../communication/protocols/bo-ajax-request';
import { BoRequest } from '../communication/protocols/bo-request';
import { CacheRequestAtGenerator } from './cache-request-generator-at';
import { Injectable } from '@angular/core';
import {DataService} from "../communication/data.service";
import {LoggerService} from "../../app-utils/logger.service";
import {Channels} from "../../app-constants/enums/channels.enum";
import {Cacheable} from "./interfaces/cacheable";
import {CacheRequest} from "./cache-request";

@Injectable()
export class CacheAtService {

	private cacheResponseStream$: Subject<any>;

	constructor(
		private network: DataService,
		private logger: LoggerService,
		private reqGen: CacheRequestAtGenerator,
	) {
		this.cacheResponseStream$ = new Subject();
	}

	public search(key: string): Observable<number | string | Blob> {
		return new Observable((observer: Subscriber<any>): void => {
			observer.next(1);
			observer.complete();
		});
	}


	public generateGetATRequest(request: { channel: Channels, data: any }): Cacheable {
		return this.reqGen.getATRequest(request);
		// return this.reqGen.getWSATRequest(request);     // for ws
	}

	public generatePutATRequest(request: { channel: Channels, data: BoRequest }): Cacheable {
		return this.reqGen.putATRequest({ data: request.data, channel: request.channel });
	}

	public ajaxGet(tokenData: Cacheable): Promise<any> {
    const keyData = new CacheRequest(tokenData);
    return new Promise((resolve): void => {
      delete keyData.data.data.body.cacheType;
      this.network.sendAjaxRequest(keyData.data.data, true).then(data => {
        return resolve(data.data.response);
      });
    });
	}
}
