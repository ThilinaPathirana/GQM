import { TestBed, inject } from '@angular/core/testing';

import { ConfigService } from '../../app-config/config.service';
import { DataService } from '../communication/data.service';
import { LocalizationService } from '../../app-utils/localization/localization.service';
import { LoggerService } from '../../app-utils/logger.service';
import { TradeRequestPopulater } from './protocols/trade-request-populater';
// import { TradeRestResponseHandlerService } from './protocols/rest/trade-rest-response-handler.service';
import { TradeService } from './trade.service';
// import { TradeUserDataStore } from './data-stores/trade-user-data-store';

class ConfigServiceStub {
}

class DataServiceStub {
}

class TradeRestResponseHandlerServiceStub {
}

class TradeUserDataStoreStub {
}

class LocalizationServiceStub {
}

class LoggerServiceStub {
}

class TradeRequestPopulaterStub {
}

describe('TradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeService,
        { provide : ConfigService , useClass : ConfigServiceStub },
        { provide : DataService , useClass : DataServiceStub },
        // { provide : TradeRestResponseHandlerService , useClass : TradeRestResponseHandlerServiceStub },
        // { provide : TradeUserDataStore , useClass : TradeUserDataStoreStub },
        { provide : LocalizationService , useClass : LocalizationServiceStub },
        { provide : LoggerService , useClass : LoggerServiceStub },
        { provide : TradeRequestPopulater , useClass : TradeRequestPopulaterStub },
      ],
    });
  });

  it('should ...', inject([TradeService], (service: TradeService) => {
    expect(service).toBeTruthy();
  }));
});
