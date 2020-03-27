import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumetControlLayoutComponent } from './documet-control-layout.component';

describe('DocumetControlLayoutComponent', () => {
  let component: DocumetControlLayoutComponent;
  let fixture: ComponentFixture<DocumetControlLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumetControlLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumetControlLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
