import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyFrontComponent } from './policy-front.component';

describe('PolicyFrontComponent', () => {
  let component: PolicyFrontComponent;
  let fixture: ComponentFixture<PolicyFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
