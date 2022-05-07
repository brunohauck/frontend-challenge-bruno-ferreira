import { createReducer, on } from '@ngrx/store';

import { Holidays } from 'src/app/models/holidays';
import { User } from 'src/app/models/user';

import {
  addUserSuccess,
} from '../actions/user.action';

export interface UserState {
  user: ReadonlyArray<User>;
}

const initialState: ReadonlyArray<User> = [];

export const userReducer = createReducer(
  initialState,
  on(addUserSuccess, (state, { user }) => [...state, user])

);
