import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../@service/event.service';
import { AuthService } from '../@service/auth.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router,
    private location: Location,
    private eventService: EventService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']).catch(reason => this.location.back());
      return this.eventService.sendLoginState(false);
    }
    return this.eventService.sendLoginState(true);
  }

}
