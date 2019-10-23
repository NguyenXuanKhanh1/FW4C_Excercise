import { Injectable, Input } from '@angular/core';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  static passwordValidator(login: Login) {
    if (login.password.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return 'Invalid Password';
    }
  }
  checkLogin(login: Login) {
    return (login.username === 'nxkhanh' && login.password === '123@123a');
  }
}
