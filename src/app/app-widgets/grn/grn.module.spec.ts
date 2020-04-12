import { GrnModule } from './grn.module';

describe('GrnModule', () => {
  let grnModule: GrnModule;

  beforeEach(() => {
    grnModule = new GrnModule();
  });

  it('should create an instance', () => {
    expect(grnModule).toBeTruthy();
  });
});
