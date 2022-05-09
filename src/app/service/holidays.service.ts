import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import {  Holidays } from '../models/holidays';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Authorization', 'Bearer ZjU4NTY4NmYtMWVhYS00MmIzLTgzNWItNzcxOTZjYTI0OTE5');

@Injectable({
  providedIn: 'root',
})
export class HolidayService {

  constructor(private http: HttpClient) {

  }
  getHolidays(code: string): Observable<Holidays> {
   
    let data = {
      country_code: code,
      year: '2022'
    }
    return this.http.post<Holidays>(environment.url+'/holidays/List', data, { 'headers': headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
