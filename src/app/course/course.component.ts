import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../service/get-info.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private demoService: GetInfoService) {}
  public game: any = [];

  ngOnInit() {
    this.demoService.getInfor().subscribe(data => {
      this.game = data.courses;
      console.log('Data: ', data.courses);
    });
  }

}
