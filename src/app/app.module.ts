import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { GetInfoService } from './service/get-info.service';
import { GetinfoComponent } from './getinfo/getinfo.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MainComponent, routingComponents, GetinfoComponent, CourseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [LoginService, GetInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
