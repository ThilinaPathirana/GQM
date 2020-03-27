import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCellRendereComponent } from './training-cell-rendere.component';

describe('TrainingCellRendereComponent', () => {
  let component: TrainingCellRendereComponent;
  let fixture: ComponentFixture<TrainingCellRendereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCellRendereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCellRendereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
