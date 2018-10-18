import { BehaviorSubject, Subscription, merge } from 'rxjs';
import { Injectable } from '@angular/core';
import { NotificationType } from '../app-constants/enums/notification-types.enum';
import { skip } from 'rxjs/operators';

@Injectable()
export class NotificationService {

  private _subjects: BehaviorSubject<any>[] = [];

  constructor() {
    for (const entry in NotificationType) {
      if (Number(entry) >= 0) {
        this._subjects.push(new BehaviorSubject<any> (undefined));
      }
    }
  }

  public notify(type: NotificationType, data?: any): void {
    this._subjects[type].next(data);
  }

  public listen(type: NotificationType | Array<NotificationType>, func: any,
                isSkipSubcriptionEnabled?: Boolean, skipCount?: number): Subscription {
    let subject: BehaviorSubject<any>;
    if (type instanceof Array) {
      const observableList = [];
      for (const notifyType of type) {
        observableList.push(this._subjects[notifyType]);
      }
      subject = <BehaviorSubject<any>> merge(...observableList);
    } else {
      subject = this._subjects[type];
    }

    if (isSkipSubcriptionEnabled) {
      const skpCount = skipCount ? skipCount : 1;
      return subject.pipe(skip(skpCount)).subscribe(func);
    }
    return subject.subscribe(func);
  }
}
