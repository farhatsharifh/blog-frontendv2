import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from '../user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private loginUrl = 'http://localhost:3000/api/login'; 
  // private loggedInStatus = false;

  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {
    // this.loggedInStatus = true;
      return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    // return this.loggedInStatus;
    return !!localStorage.getItem('token');
  }
  
  logout() {
    localStorage.setItem('userId', null);
    localStorage.setItem('token', null);
  }

}