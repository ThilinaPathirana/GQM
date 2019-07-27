import { ATCacheTypes } from '../../../app-constants/enums/at-cache-type.enum';
import { BoMessageGroups } from '../../../app-constants/enums/bo-message-groups.enum';
import { BoMessageTypes } from '../../../app-constants/enums/bo-message-types.enum';

/**
	* Object model that make AT request
	* Created by MalakaD on 8/22/2017.
	*/

export class BoRequest {
	public HED: any = {
		MSG_GRP: BoMessageGroups,
		MSG_TYP: BoMessageTypes,
		CL_VAR: 'WEBAT_1.0',
		CHANNEL: '7',
		SESSION: '',
		CL_IP: '192.168.20.132', // TODO : Get IP from a function
	};
	public DAT: any;

	public cacheType: ATCacheTypes;
	public channel: any;
}
