import { MrmMeetingModule } from './mrm-meeting.module';

describe('MrmMeetingModule', () => {
  let mrmMeetingModule: MrmMeetingModule;

  beforeEach(() => {
    mrmMeetingModule = new MrmMeetingModule();
  });

  it('should create an instance', () => {
    expect(mrmMeetingModule).toBeTruthy();
  });
});
