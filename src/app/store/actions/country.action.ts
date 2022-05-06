import { createAction, props } from '@ngrx/store';
import { Countries } from 'src/app/models/countries';


export const getCountries = createAction('[Country] Get country');
export const getCountriesSuccess = createAction(
  '[Country] Get country success',
  (countries: ReadonlyArray<Countries>) => ({ countries })

);
