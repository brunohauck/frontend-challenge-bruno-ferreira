import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { CountryService } from 'src/app/service/country.service';
import { HolidayService } from 'src/app/service/holidays.service';

import {
  getHolidays,
  getHolidaysSuccess,
} from '../actions/holiday.action';

@Injectable()
export class HolidaysEffects {
  loadHoliday$ = createEffect(() =>
    this.action$.pipe(
      ofType(getHolidays),
      exhaustMap(() =>
        this.holidayService.getHolidays().pipe(
          map((holidays) => getHolidaysSuccess(holidays))
        )
      )
    )
  );
  constructor(private action$: Actions, private holidayService: HolidayService) {}
}
