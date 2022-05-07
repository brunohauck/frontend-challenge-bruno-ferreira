import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';


export const getUser = createAction('[User] Get user');

export const addUser = createAction(
  '[User] Add user',
  (user: User) => ({ user })

);
export const addUserSuccess = createAction(
  '[User] Add user success',
  (user: User) => ({ user })
);
