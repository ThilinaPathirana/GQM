import { Data } from '../../communication/data';

export interface Cacheable {
	token: string;
	data?: Data | any;
}
