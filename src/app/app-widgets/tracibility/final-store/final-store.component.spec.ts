import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalStoreComponent } from './final-store.component';

describe('FinalStoreComponent', () => {
  let component: FinalStoreComponent;
  let fixture: ComponentFixture<FinalStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
