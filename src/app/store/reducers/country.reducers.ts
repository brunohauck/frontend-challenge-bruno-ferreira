import { createReducer, on } from '@ngrx/store';
import { Countries } from 'src/app/models/countries';

import {
  getCountriesSuccess,
} from '../actions/country.action';

export interface CountriesState {
  countries: ReadonlyArray<Countries>;
}

const initialState: ReadonlyArray<Countries> = [];

export const countryReducer = createReducer(
  initialState,
  on(getCountriesSuccess, (state, { countries }) => [...countries])

);
