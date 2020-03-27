import { WorkInstrModule } from './work-instr.module';

describe('WorkInstrModule', () => {
  let workInstrModule: WorkInstrModule;

  beforeEach(() => {
    workInstrModule = new WorkInstrModule();
  });

  it('should create an instance', () => {
    expect(workInstrModule).toBeTruthy();
  });
});
