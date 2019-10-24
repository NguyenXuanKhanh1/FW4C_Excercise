import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../service/get-info.service';

@Component({
  selector: 'app-getinfo',
  templateUrl: './getinfo.component.html',
  styleUrls: ['./getinfo.component.css']
})
export class GetinfoComponent implements OnInit {

  constructor(private demoService: GetInfoService) {}
  public game: any = [];

  ngOnInit() {
    this.demoService.getPostDetail('1').subscribe(data => {
      this.game = data;
      console.log('Data: ', data);
    });
  }

}
