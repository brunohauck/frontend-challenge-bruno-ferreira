import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidaysPage } from './holidays.page';

const routes: Routes = [
  {
    path: '',
    component: HolidaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidaysPageRoutingModule {}
