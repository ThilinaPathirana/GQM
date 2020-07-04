import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalWorkSheetComponent } from './final-work-sheet.component';

describe('FinalWorkSheetComponent', () => {
  let component: FinalWorkSheetComponent;
  let fixture: ComponentFixture<FinalWorkSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalWorkSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalWorkSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
