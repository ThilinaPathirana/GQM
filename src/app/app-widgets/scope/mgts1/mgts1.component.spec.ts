import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgts1Component } from './mgts1.component';

describe('Mgts1Component', () => {
  let component: Mgts1Component;
  let fixture: ComponentFixture<Mgts1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgts1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
