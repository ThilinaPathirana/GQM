import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrmMeetingLayoutComponent } from './mrm-meeting-layout.component';

describe('MrmMeetingLayoutComponent', () => {
  let component: MrmMeetingLayoutComponent;
  let fixture: ComponentFixture<MrmMeetingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrmMeetingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrmMeetingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
