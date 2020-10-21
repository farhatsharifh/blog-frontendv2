import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../user';
import { BACKEND_URL } from './backendUrl';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerUserUrl = BACKEND_URL+'signup';
  private registerationStatus: string = '';  

  constructor(
    private http: HttpClient
  ) { }

  register(user: User) {
    return this.http.post<any>(this.registerUserUrl, user);
  }

  getregisterationStatus(): string {
    return this.registerationStatus;
  }

  setregisterationStatus(status: string) {
    this.registerationStatus = status;
  }

}
