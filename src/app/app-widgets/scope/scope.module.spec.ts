import { ScopeModule } from './scope.module';

describe('ScopeModule', () => {
  let scopeModule: ScopeModule;

  beforeEach(() => {
    scopeModule = new ScopeModule();
  });

  it('should create an instance', () => {
    expect(scopeModule).toBeTruthy();
  });
});
