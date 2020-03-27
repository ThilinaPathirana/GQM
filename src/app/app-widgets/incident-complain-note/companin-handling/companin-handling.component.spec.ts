import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaninHandlingComponent } from './companin-handling.component';

describe('CompaninHandlingComponent', () => {
  let component: CompaninHandlingComponent;
  let fixture: ComponentFixture<CompaninHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaninHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaninHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
