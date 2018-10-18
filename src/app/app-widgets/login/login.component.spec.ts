import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {AuthService} from '../../app-backend/auth/auth.service';
import {AngularMaterialModule} from '../../app-modules/angular-material.module';

class AuthServiceStub {
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule, FormsModule, RouterTestingModule],
      declarations: [LoginComponent],
      providers: [
        { provide : AuthService, useClass : AuthServiceStub },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
