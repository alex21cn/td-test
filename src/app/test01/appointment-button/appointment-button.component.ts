import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './appointment-button.component.html',
  styleUrls: ['./appointment-button.component.scss'],
  inputs: ['app']
})
export class AppointmentButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  appClick(app){
    alert(app.text);
  }
}
