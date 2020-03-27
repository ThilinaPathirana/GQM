import { BoRequest } from './bo-request';

/**
	* The ajax request that send to the server
	* Created by malaka on 8/22/17.
	*/

export interface BackOfficeAjaxRequest {
	method?: string;
	url: string;
	body: BoRequest;
}

export interface BackOfficeRequest {
	body: BoRequest;
}
