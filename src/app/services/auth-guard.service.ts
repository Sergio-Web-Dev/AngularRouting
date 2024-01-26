import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, createUrlTreeFromSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

const authGuard : CanActivateFn = async ( route : ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  const isAuthenticated = await inject(AuthService).isAuthenticated();

  return isAuthenticated ? true : createUrlTreeFromSnapshot(route, ['/']);
}

const authChildGuard : CanActivateFn = async ( route : ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  const authService = inject(AuthService);
  const isAuthenticated = await authService.isAuthenticated();

  if(!isAuthenticated)
    return createUrlTreeFromSnapshot(route, ['/']);

  const isAdmin = await authService.isAdmin();

  return isAdmin ? true : createUrlTreeFromSnapshot(route, ['/']);
}

export {authGuard, authChildGuard}
