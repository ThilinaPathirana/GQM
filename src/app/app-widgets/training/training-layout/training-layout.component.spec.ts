import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLayoutComponent } from './training-layout.component';

describe('TrainingLayoutComponent', () => {
  let component: TrainingLayoutComponent;
  let fixture: ComponentFixture<TrainingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
