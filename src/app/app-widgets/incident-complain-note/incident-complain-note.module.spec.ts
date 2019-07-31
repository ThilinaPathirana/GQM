import { IncidentComplainNoteModule } from './incident-complain-note.module';

describe('IncidentComplainNoteModule', () => {
  let incidentComplainNoteModule: IncidentComplainNoteModule;

  beforeEach(() => {
    incidentComplainNoteModule = new IncidentComplainNoteModule();
  });

  it('should create an instance', () => {
    expect(incidentComplainNoteModule).toBeTruthy();
  });
});
