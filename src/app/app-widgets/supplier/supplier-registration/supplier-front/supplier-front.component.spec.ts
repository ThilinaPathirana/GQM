import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFrontComponent } from './supplier-front.component';

describe('SupplierFrontComponent', () => {
  let component: SupplierFrontComponent;
  let fixture: ComponentFixture<SupplierFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
