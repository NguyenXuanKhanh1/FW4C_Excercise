import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { MainComponent } from '../main/main.component';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validator,
  Validators
} from '@angular/forms';
import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username = '';
  @Input() password = '';
  @Output() user = new EventEmitter<{
    username: string;
    password: string;
  }>();

  correctUsername: 'nxkhanh';
  correctPassword: '123@123a';
  loginForm: Login[] = [];
  formLogin: any;

  constructor(private router: Router, private form: FormBuilder, private service: LoginService) {
    this.formLogin = this.form.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  OnLogin() {
    const login = new Login(this.formLogin.value.username, this.formLogin.value.password);
    login.username = this.formLogin.value.username;
    login.password = this.formLogin.value.password;
    this.loginForm.push(login);
    if (this.service.checkLogin(login) === true) {
      this.router.navigate(['main']).then(() => {
        this.user.emit({
          username: this.username,
          password: this.password
        });
      });
    } else {
      alert('Check your username or password');
    }
  }
}
