import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerService } from '../../../app-utils/logger.service';
import { Subject } from 'rxjs';

@Injectable()
export class AjaxService {

	private response$: Subject<any>;

	constructor(private http: HttpClient, private loggerService: LoggerService) {
		this.response$ = new Subject();
	}

	public getResponse(): Subject<any> {
		return this.response$;
	}

	public send(requestParams: any, routeToResponseHandler: boolean): Promise<any> {
		const req = new HttpRequest(
			requestParams.method,
			requestParams.url,
			requestParams.body,
			{
				withCredentials: requestParams.withCredentials || null,
				params: requestParams.params,
				responseType: requestParams.responseType,
			},
		);
		return new Promise((resolve, reject) => {
			this.http.request(req)
				.toPromise()
				.then(
					res => {
						const receivedMsg = {
							data: {
								response: res['body'],
								connection: 'channel',
							},
						};

						if (routeToResponseHandler) {
							this.response$.next(<MessageEvent>receivedMsg);
						} else {
							resolve(receivedMsg);
						}
					},
					err => {
						if (routeToResponseHandler) {
							this.loggerService.logError(err, 'AjaxService');
						} else {
							reject(err);
						}
					},
				);
		});
	}
}
