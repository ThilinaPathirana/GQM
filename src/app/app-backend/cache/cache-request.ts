import { Cacheable } from './interfaces/cacheable';
import { Data } from '../communication/data';

const MILLISECONDS_TO_SECOND = 1000;

export class CacheRequest {
	private _token: string;
	private _data: Data | any;

	constructor(request: Cacheable) {
		this._token = request.token;
		this._data = request.data ? request.data : null;
	}

	public get token(): string {
		return this._token;
	}

	public set token(value: string) {
		this._token = value;
	}

	public get data(): Data | any {
		return this._data;
	}

	public set data(value: Data | any) {
		this._data = value;
	}
}
