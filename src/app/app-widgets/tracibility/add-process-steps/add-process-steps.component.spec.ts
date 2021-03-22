import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessStepsComponent } from './add-process-steps.component';

describe('AddProcessStepsComponent', () => {
  let component: AddProcessStepsComponent;
  let fixture: ComponentFixture<AddProcessStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcessStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcessStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
