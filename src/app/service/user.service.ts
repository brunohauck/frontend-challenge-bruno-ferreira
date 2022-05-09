import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Countries, Country } from '../models/countries';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { UserReturn } from '../models/userReturn';

const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Authorization', 'Bearer ZjU4NTY4NmYtMWVhYS00MmIzLTgzNWItNzcxOTZjYTI0OTE5');

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://api.m3o.com/v1/user/Login';
  constructor(private http: HttpClient) {
  }

  addUser(user: User): Observable<UserReturn> {
    return this.http.post<UserReturn>(this.url, user, { 'headers': headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
