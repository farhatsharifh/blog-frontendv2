import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from '../user';
import { BACKEND_URL } from './backendUrl';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private loginUrl = BACKEND_URL+'login'; 

  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {
      return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('userId');
  }
  
  logout() {
    localStorage.setItem('userId', null);
    localStorage.setItem('token', null);
  }

}