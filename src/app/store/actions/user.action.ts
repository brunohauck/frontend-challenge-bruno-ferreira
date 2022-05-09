import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { UserReturn } from 'src/app/models/userReturn';


export const getUser = createAction('[User] Get user');

export const getUserReturn = createAction('[UserReturn] Get userReturn');

export const addUser = createAction(
  '[User] Add user',
  (user: User) => ({ user })

);
export const addUserReturnSuccess = createAction(
  '[UserReturn] Add user success',
  (userReturn: UserReturn) => ({ userReturn })
);
