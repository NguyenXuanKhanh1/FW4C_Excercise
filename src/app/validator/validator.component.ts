import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {
  correctUserName: 'nxkhanh';
  correctPassword: '123@123a';
  @Input() username: string;
  @Input() password: string;
  @Output() status = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    if (this.correctUserName === this.username && this.correctPassword === this.password) {
      this.status.emit(true);
    } else {
      this.status.emit(false);
    }
  }

}
