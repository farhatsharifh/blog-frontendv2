import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerUserUrl = 'http://localhost:3000/api/signup';

  constructor(
    private http: HttpClient
  ) { }

  register(user: User) {
    return this.http.post<any>(this.registerUserUrl, user);
  }

}
