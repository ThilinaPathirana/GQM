import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInstrComponent } from './work-instr.component';

describe('WorkInstrComponent', () => {
  let component: WorkInstrComponent;
  let fixture: ComponentFixture<WorkInstrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInstrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
