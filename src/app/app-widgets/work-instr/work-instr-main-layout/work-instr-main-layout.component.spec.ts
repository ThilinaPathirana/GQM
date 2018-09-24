import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInstrMainLayoutComponent } from './work-instr-main-layout.component';

describe('WorkInstrMainLayoutComponent', () => {
  let component: WorkInstrMainLayoutComponent;
  let fixture: ComponentFixture<WorkInstrMainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInstrMainLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInstrMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
