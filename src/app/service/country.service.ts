import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Countries, Country } from '../models/countries';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Authorization', 'Bearer ZjU4NTY4NmYtMWVhYS00MmIzLTgzNWItNzcxOTZjYTI0OTE5');

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Countries> {
    console.log('get countries')
    return this.http.get<Countries>(environment.url+'/holidays/Countries', { 'headers': headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
