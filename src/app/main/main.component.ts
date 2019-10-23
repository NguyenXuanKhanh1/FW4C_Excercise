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

  ngOnInit() {}
  displayCounter(login: Login) {
    console.log('where are you now? ', login.username + ' ' + login.password);
  }
}
