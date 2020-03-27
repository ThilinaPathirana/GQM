import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgts1LayoutComponent } from './mgts1-layout.component';

describe('Mgts1LayoutComponent', () => {
  let component: Mgts1LayoutComponent;
  let fixture: ComponentFixture<Mgts1LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgts1LayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgts1LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
