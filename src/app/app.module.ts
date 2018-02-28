import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
import { AppRoutingModule } from './/app-routing.module';
import { BookAppointmentComponent } from './test01/book-appointment/book-appointment.component';
import { AppointmentService } from './test01/appointment.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test01Component,
    Test02Component,
    BookAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [AppointmentService]
})
export class AppModule { }
