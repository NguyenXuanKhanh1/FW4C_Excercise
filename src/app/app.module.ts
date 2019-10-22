import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { ValidatorComponent } from './validator/validator.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MainComponent, routingComponents, ValidatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([{ path: 'main', component: MainComponent }])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
