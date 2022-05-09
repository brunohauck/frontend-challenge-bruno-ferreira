import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import {  Holidays } from '../models/holidays';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Authorization', 'Bearer ZjU4NTY4NmYtMWVhYS00MmIzLTgzNWItNzcxOTZjYTI0OTE5');

@Injectable({
  providedIn: 'root',
})
export class HolidayService {

  //private url = 'https://api.m3o.com/v1/holidays/List';
  private url = 'https://startdev.net/json-server/holidays.json';
  constructor(private http: HttpClient) {

  }
  getHolidays(): Observable<Holidays> {
    return this.http.get<Holidays>(this.url, { 'headers': headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
