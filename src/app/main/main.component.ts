import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Login } from '../login/login.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() {}
  userInfo = Login;
  ngOnInit() {
    this.userInfo = window.history.state.data;
    console.log(this.userInfo);
  }
  // displayCounter(login: Login) {
  //   console.log('where are you now? ', login.username + ' ' + login.password);
  // }
}
