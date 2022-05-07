import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Countries } from '../models/countries';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Authorization', 'Bearer ZjU4NTY4NmYtMWVhYS00MmIzLTgzNWItNzcxOTZjYTI0OTE5');

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  //private url = 'https://api.m3o.com/v1/holidays/Countries';
  private url = 'https://startdev.net/json-server/db.json';
  private url2 = 'https://startdev.net/json-server/user.json';
  constructor(private http: HttpClient) {

  }
  getCountries(): Observable<Countries>{
    return this.http.get<Countries>(this.url, { 'headers': headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url2, user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
