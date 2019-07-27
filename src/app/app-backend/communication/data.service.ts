import { Observable, Subject, concat, from, of, timer } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AjaxService } from './ajax/ajax.service';
import { Channels } from '../../app-constants/enums/channels.enum';
import { Injectable } from '@angular/core';
import { LoggerService } from '../../app-utils/logger.service';

@Injectable()
export class DataService {

	private responseStream$: Subject<any>;
	private responseAjaxStream$: Subject<any>;

	constructor(
		private ajaxService: AjaxService,
		private loggerService: LoggerService,
	) {
		this.responseStream$ = new Subject();
		this.responseAjaxStream$ = new Subject();
		this.updateAjaxResponseStream();
	}

	/**
	 * Initiate connections from config
	 * @param {ConnectionConfig[]} connectionConfigs - Connection config
	 */
	public init(): void {
	}

	public sendAjaxRequest(requestOptions: any, routeToResponseHandler: boolean): Promise<any> {
		return this.ajaxService.send(requestOptions, routeToResponseHandler);
	}

	public getResponseSteam(): Subject<any> {
		return this.responseStream$;
	}

	public getAjaxResponseSteam(): Subject<any> {
		return this.responseAjaxStream$;
	}

	private updateAjaxResponseStream(): void {
		this.ajaxService.getResponse().subscribe(msg => {
			if (msg && msg.data) {
				this.responseAjaxStream$.next(msg.data);
			}
		});
	}
}
