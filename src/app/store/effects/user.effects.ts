import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { CountryService } from 'src/app/service/country.service';
import { UserService } from 'src/app/service/user.service';

import {
  addUser,
  addUserReturnSuccess
} from '../actions/user.action';

@Injectable()
export class UserEffects {

  addUser$ = createEffect(() =>
  this.action$.pipe(
    ofType(addUser),
    tap((user) => console.log('login user')),
    concatMap(({ user }) =>
      this.userService.addUser(user).pipe(
        map((newUser) => addUserReturnSuccess(newUser))
      )
    )
  )
);

  constructor(private action$: Actions, private userService: UserService) {}
}
