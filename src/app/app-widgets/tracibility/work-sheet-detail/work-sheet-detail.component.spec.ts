import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSheetDetailComponent } from './work-sheet-detail.component';

describe('WorkSheetDetailComponent', () => {
  let component: WorkSheetDetailComponent;
  let fixture: ComponentFixture<WorkSheetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSheetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSheetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
