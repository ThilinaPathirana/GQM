import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GonLayoutComponent } from './gon-layout.component';

describe('GonLayoutComponent', () => {
  let component: GonLayoutComponent;
  let fixture: ComponentFixture<GonLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GonLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
