import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnLayoutComponent } from './grn-layout.component';

describe('GrnLayoutComponent', () => {
  let component: GrnLayoutComponent;
  let fixture: ComponentFixture<GrnLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
