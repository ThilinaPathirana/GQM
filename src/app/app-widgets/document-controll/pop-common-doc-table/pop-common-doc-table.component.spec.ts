import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCommonDocTableComponent } from './pop-common-doc-table.component';

describe('PopCommonDocTableComponent', () => {
  let component: PopCommonDocTableComponent;
  let fixture: ComponentFixture<PopCommonDocTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopCommonDocTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopCommonDocTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
