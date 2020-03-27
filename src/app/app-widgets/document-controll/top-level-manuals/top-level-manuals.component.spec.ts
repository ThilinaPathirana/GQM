import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelManualsComponent } from './top-level-manuals.component';

describe('TopLevelManualsComponent', () => {
  let component: TopLevelManualsComponent;
  let fixture: ComponentFixture<TopLevelManualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelManualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelManualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
