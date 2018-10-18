import { Channels } from '../../app-constants/enums/channels.enum';

export interface Data {
  channel: Channels;
  data: any;
  auth?: boolean;
}
