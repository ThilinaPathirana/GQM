import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDocTableComponent } from './common-doc-table.component';

describe('CommonDocTableComponent', () => {
  let component: CommonDocTableComponent;
  let fixture: ComponentFixture<CommonDocTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDocTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDocTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
