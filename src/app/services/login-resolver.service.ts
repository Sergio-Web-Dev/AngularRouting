import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginResolverService {

  constructor() { }
}

export const loginResolver : ResolveFn<string> = (route : ActivatedRouteSnapshot, state : RouterStateSnapshot) => {
  return "";
}

