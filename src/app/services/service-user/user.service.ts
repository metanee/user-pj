import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Appconst} from '../../constants/app-const';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private serverPath: string = Appconst.serverPath;
  constructor(private http: Http) { }

  newUser(username: string , email: string) {
    let url = this.serverPath + '/user/newUser';
    let userInfo = {
      'username' : username,
      'email' : email
    }
    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, JSON.stringify(userInfo), {headers : tokenHeader});
  }
  retrievePassword(email: string) {
    let url = this.serverPath + '/user/newUser';
    let userInfo = {
      'email' : email
    }
    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, JSON.stringify(userInfo), {headers : tokenHeader});
  }
}
