import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInstrDialogComponent } from './work-instr-dialog.component';

describe('WorkInstrDialogComponent', () => {
  let component: WorkInstrDialogComponent;
  let fixture: ComponentFixture<WorkInstrDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInstrDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInstrDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
