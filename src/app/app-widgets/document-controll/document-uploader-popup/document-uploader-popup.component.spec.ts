import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploaderPopupComponent } from './document-uploader-popup.component';

describe('DocumentUploaderPopupComponent', () => {
  let component: DocumentUploaderPopupComponent;
  let fixture: ComponentFixture<DocumentUploaderPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentUploaderPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUploaderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
