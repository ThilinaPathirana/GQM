import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCellRendereComponent } from './base-cell-rendere.component';

describe('BaseCellRendereComponent', () => {
  let component: BaseCellRendereComponent;
  let fixture: ComponentFixture<BaseCellRendereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCellRendereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCellRendereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
