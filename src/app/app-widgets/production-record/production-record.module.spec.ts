import { ProductionRecordModule } from './production-record.module';

describe('ProductionRecordModule', () => {
  let productionRecordModule: ProductionRecordModule;

  beforeEach(() => {
    productionRecordModule = new ProductionRecordModule();
  });

  it('should create an instance', () => {
    expect(productionRecordModule).toBeTruthy();
  });
});
