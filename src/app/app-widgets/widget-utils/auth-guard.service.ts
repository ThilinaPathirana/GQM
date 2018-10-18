import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Injectable } from '@angular/core';
import {AuthService} from '../../app-backend/auth/auth.service';
import {UserState} from '../../app-backend/auth/user-state';

/**
 * Created by malaka on 8/23/17.
 */
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkAuthenticated(url);
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkAuthenticated(url);
  }

  private checkAuthenticated(url: string): boolean {
    if (UserState.getInstance().isAuthenticated && UserState.getInstance().isValidSession) {
      return true;
    }
    this.authService.redirectURL = url;
    this.router.navigate(['/login']);
    return false;
  }
}
