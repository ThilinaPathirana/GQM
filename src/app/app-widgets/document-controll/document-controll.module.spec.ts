import { DocumentControllModule } from './document-controll.module';

describe('DocumentControllModule', () => {
  let documentControllModule: DocumentControllModule;

  beforeEach(() => {
    documentControllModule = new DocumentControllModule();
  });

  it('should create an instance', () => {
    expect(documentControllModule).toBeTruthy();
  });
});
