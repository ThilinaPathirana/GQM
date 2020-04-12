import { GonModule } from './gon.module';

describe('GonModule', () => {
  let gonModule: GonModule;

  beforeEach(() => {
    gonModule = new GonModule();
  });

  it('should create an instance', () => {
    expect(gonModule).toBeTruthy();
  });
});
