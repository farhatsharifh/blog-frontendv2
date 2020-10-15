import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../user';
import { backendUrl } from './backendUrl';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerUserUrl = backendUrl+'signup';

  constructor(
    private http: HttpClient
  ) { }

  register(user: User) {
    return this.http.post<any>(this.registerUserUrl, user);
  }

}
