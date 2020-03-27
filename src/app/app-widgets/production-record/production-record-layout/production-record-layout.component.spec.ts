import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionRecordLayoutComponent } from './production-record-layout.component';

describe('ProductionRecordLayoutComponent', () => {
  let component: ProductionRecordLayoutComponent;
  let fixture: ComponentFixture<ProductionRecordLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionRecordLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionRecordLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
