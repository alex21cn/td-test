import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppointmentService {

  constructor(private http: HttpClient) {
    this.getAppointments().subscribe(data => {
      console.log(data);
    });
   }
  getAppointments(): Observable<any> {
    return this.http.get('../../assets/data.json');
  }
}
