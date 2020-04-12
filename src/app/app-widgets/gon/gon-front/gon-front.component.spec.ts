import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GonFrontComponent } from './gon-front.component';

describe('GonFrontComponent', () => {
  let component: GonFrontComponent;
  let fixture: ComponentFixture<GonFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GonFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GonFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
