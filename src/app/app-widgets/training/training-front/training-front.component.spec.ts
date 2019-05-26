import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingFrontComponent } from './training-front.component';

describe('TrainingFrontComponent', () => {
  let component: TrainingFrontComponent;
  let fixture: ComponentFixture<TrainingFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
