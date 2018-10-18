import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { OrderSides } from '../../app-constants/enums/trade-meta/trade-utils/order-sides.enum';
import { userSettings } from '../../app-config/user-settings';

@Pipe({ name: 'formatArrowForBidAskDif' })
export class FormatArrowForBidAskDifPipe implements PipeTransform {

  public transform(value: string): Object {
    const cssObj = { 'fa': true, 'fa-2x': true };
    if (parseFloat(value) > 0) {
      cssObj['fa-long-arrow-up'] = true;
    }
    return cssObj;
  }
}
