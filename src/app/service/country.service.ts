import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Countries } from '../models/countries';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Authorization', 'Bearer ZjU4NTY4NmYtMWVhYS00MmIzLTgzNWItNzcxOTZjYTI0OTE5');

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private url = 'https://api.m3o.com/v1/holidays/Countries';
  constructor(private http: HttpClient) {

  }
  getCountries(): Observable<ReadonlyArray<Countries>> {
    return this.http.get<ReadonlyArray<Countries>>(this.url, { 'headers': headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
