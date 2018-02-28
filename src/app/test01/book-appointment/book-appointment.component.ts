import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import {AppointmentService} from '../appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
  appointments = [1, 2, 3];
  constructor(private service: AppointmentService) {  }

  ngOnInit() {
    this.service.getAppointments().subscribe(data => {
      console.log(data);
    });
  }

}
