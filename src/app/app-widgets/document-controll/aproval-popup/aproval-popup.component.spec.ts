import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovalPopupComponent } from './aproval-popup.component';

describe('AprovalPopupComponent', () => {
  let component: AprovalPopupComponent;
  let fixture: ComponentFixture<AprovalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovalPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
