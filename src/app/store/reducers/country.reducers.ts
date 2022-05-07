import { createReducer, on } from '@ngrx/store';
import { Country } from 'src/app/models/countries';

import {
  getCountriesSuccess,
} from '../actions/country.action';

export interface CountryState {
  countries: ReadonlyArray<Country>;
}

const initialState: ReadonlyArray<Country> = [];

export const countryReducer = createReducer(
  initialState,
  on(getCountriesSuccess, (state, { countries }) =>  [...countries] )

);
