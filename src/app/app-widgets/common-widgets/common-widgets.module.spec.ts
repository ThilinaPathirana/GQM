import { CommonWidgetsModule } from './common-widgets.module';

describe('CommonWidgetsModule', () => {
  let commonWidgetsModule: CommonWidgetsModule;

  beforeEach(() => {
    commonWidgetsModule = new CommonWidgetsModule();
  });

  it('should create an instance', () => {
    expect(commonWidgetsModule).toBeTruthy();
  });
});
