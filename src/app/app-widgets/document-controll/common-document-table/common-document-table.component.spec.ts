import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDocumentTableComponent } from './common-document-table.component';

describe('CommonDocumentTableComponent', () => {
  let component: CommonDocumentTableComponent;
  let fixture: ComponentFixture<CommonDocumentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDocumentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDocumentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
