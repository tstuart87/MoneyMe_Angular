import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = 'https://localhost:44325'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  register(regUserData: RegisterUser) { 
    return this.http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const authString =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${Api_Url}/Token`, authString).subscribe((token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this.router.navigate(['/Monthly']).then(() => { window.location.reload() 
      });
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) {
      return new Observable(observer => observer.next(false));
    }

    return this.http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeaders() });
  }

  logout() {
    this.http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeaders() });
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
    location.reload();
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
