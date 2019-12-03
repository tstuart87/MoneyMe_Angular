import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserInfo } from '../models/UserInfo';
import {APIURL} from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  register(regUserData: RegisterUser) {
    return this.http.post(`${APIURL}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const authString =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${APIURL}/Token`, authString).subscribe((token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this.userAdminRole()
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) {
      return new Observable(observer => observer.next(false));
    }

    return this.http.get(`${APIURL}/api/Account/UserInfo`, { headers: this.setHeaders() });
  }
  isAdmin: Boolean = true;

  userAdminRole(): any {
    this.currentUser().subscribe((userInfo: UserInfo) => {
      localStorage.setItem('Role', userInfo.Role.toString());
      this.router.navigate(['/Monthly']).then(() => {
        window.location.reload()
      });

    });
  };


  logout() {
    this.http.post(`${APIURL}/api/Account/Logout`, { headers: this.setHeaders() });
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']).then(() => { window.location.reload()
    });
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
