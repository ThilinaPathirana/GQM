import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaninHandlingLayoutComponent } from './companin-handling-layout.component';

describe('CompaninHandlingLayoutComponent', () => {
  let component: CompaninHandlingLayoutComponent;
  let fixture: ComponentFixture<CompaninHandlingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaninHandlingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaninHandlingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
