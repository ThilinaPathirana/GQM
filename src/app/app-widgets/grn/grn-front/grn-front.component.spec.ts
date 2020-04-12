import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnFrontComponent } from './grn-front.component';

describe('GrnFrontComponent', () => {
  let component: GrnFrontComponent;
  let fixture: ComponentFixture<GrnFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
