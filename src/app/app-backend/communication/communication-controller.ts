import { Channels } from '../../app-constants/enums/channels.enum';
import { ConnectionV2 } from './connection-v2';
import { Data } from './data';
import { Subject } from 'rxjs';

export interface CommunicationController {
  init(connections?: ConnectionV2[]): void;
  send(data: Data, connection?: ConnectionV2): void;
  unsubscribeConnection(channel: Channels, connection?: ConnectionV2): void;
  getResponse(): Subject<any> | {[channel: string]: Subject<any>};  // todo: change to subject of subjects
}
