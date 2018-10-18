import { Channels } from '../../app-constants/enums/channels.enum';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { LoggerService } from '../../app-utils/logger.service';
import { Subject } from 'rxjs';

@Injectable()
export class StreamRouteService {

  private priceResponseStream$: Subject<Object>;
  private tradeResponseStream$: Subject<Object>;
  private backOfficeResponseStream$: Subject<Object>;
  private controllMessageResponseStream$: Subject<Object>;

  constructor(private dataService: DataService, private loggerService: LoggerService) {
    this.priceResponseStream$ = new Subject();
    this.tradeResponseStream$ = new Subject();
    this.backOfficeResponseStream$ = new Subject();
    this.controllMessageResponseStream$ = new Subject();
    this.routeResponseStream();
  }

  public getPriceResponseStream(): Subject<any> {
    return this.priceResponseStream$;
  }
  public getBackOfficeResponseStream(): Subject<any> {
    return this.backOfficeResponseStream$;
  }

  public getTradeResponseStream(): Subject<any> {
    return this.tradeResponseStream$;
  }

  public getControllMessageResponseStream(): Subject<any> {
    return this.controllMessageResponseStream$;
  }

  private routeResponseStream(): void {
    this.dataService.getResponseSteam().subscribe(response => {
      switch (response.connection) {
        case Channels.Price :
          this.priceResponseStream$.next({ data : response.data , channel : Channels.Price });
          break;
        case Channels.PriceMeta :
          this.priceResponseStream$.next({ data : response.data , channel : Channels.PriceMeta });
          break;
        case Channels.Trade :
          this.tradeResponseStream$.next({ data : response.data , channel : Channels.Trade });
          break;
         case Channels.Wrapper :
           this.controllMessageResponseStream$.next({ data : response.data , channel : Channels.Wrapper });
           break;
          case Channels.BackOffice :
            this.backOfficeResponseStream$.next({ data : response.data , channel : Channels.BackOffice });
            break;
           default :
             this.loggerService.logError('Invalid Channel Found...!', 'StreamRouteService');
      }
    });
  }
}
