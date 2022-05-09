import { createAction, props } from '@ngrx/store';
import { Holidays } from 'src/app/models/holidays';


export const getHolidays = createAction(
  '[Holiday] Get holiday',
  (code: string) => ({ code })
  );
export const getHolidaysSuccess = createAction(
  '[Holiday] Get holiday success',
  (holidays: ReadonlyArray<Holidays>) => ({ holidays })
);
