import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { CountryService } from 'src/app/service/country.service';

import {
  addUser,
  addUserSuccess
} from '../actions/user.action';

@Injectable()
export class UserEffects {

  addUser$ = createEffect(() =>
  this.action$.pipe(
    ofType(addUser),
    tap((user) => console.log(user)),
    concatMap(({ user }) =>
      this.countryService.addUser(user).pipe(
        map((newUser) => addUserSuccess(newUser))
      )
    )
  )
);

  constructor(private action$: Actions, private countryService: CountryService) {}
}
