import { createReducer, on } from '@ngrx/store';

import { Holidays } from 'src/app/models/holidays';

import {
  getHolidaysSuccess,
} from '../actions/holiday.action';

export interface HolidaysState {
  countries: ReadonlyArray<Holidays>;
}

const initialState: ReadonlyArray<Holidays> = [];

export const holidaysReducer = createReducer(
  initialState,
  on(getHolidaysSuccess, (state, { holidays }) => [...holidays])

);
