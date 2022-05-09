import { createReducer, on } from '@ngrx/store';
import { UserReturn } from 'src/app/models/userReturn';

import {
  addUserReturnSuccess,
} from '../actions/user.action';

export interface UserReturnState {
  userReturn: Readonly<UserReturn>;
}

let initialState: UserReturn;

export const userReducer = createReducer(
  initialState,
  on(addUserReturnSuccess, (state, { userReturn }) =>  userReturn)

);
