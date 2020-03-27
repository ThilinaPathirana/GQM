import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeetingRecordComponent } from './add-meeting-record.component';

describe('AddMeetingRecordComponent', () => {
  let component: AddMeetingRecordComponent;
  let fixture: ComponentFixture<AddMeetingRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeetingRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeetingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
