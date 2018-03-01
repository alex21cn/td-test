import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import {AppointmentService} from '../appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
  appointments = [];
  items = [];
  constructor(private service: AppointmentService) {  }

  ngOnInit() {
    this.service.getAppointments().subscribe(data => {
      console.log(data);
      this.appointments = data;
      this.items = Array(this.appointments.length/2).fill(0).map((x,i) => i);
    });
  }

}
