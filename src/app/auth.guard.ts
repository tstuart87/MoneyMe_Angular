import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private user: UserService, private auth: AuthService, private router: Router) {}

  canActivate():boolean {
    if (this.auth.isAdmin == false) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
