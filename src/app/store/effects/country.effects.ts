import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { CountryService } from 'src/app/service/country.service';

import {
  getCountries,
  getCountriesSuccess,
} from '../actions/country.action';

@Injectable()
export class CountriesEffects {
  loadCountry$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCountries),
      exhaustMap(() =>
        this.countryService.getCountries().pipe(
          map((countries) => getCountriesSuccess(countries.countries))
        )
      )
    )
  );
  constructor(private action$: Actions, private countryService: CountryService) {}
}
