import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getHolidays } from '../store/actions/holiday.action';
import { HolidaysState } from '../store/reducers/holiday.reducers';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.page.html',
  styleUrls: ['./holidays.page.scss'],
})
export class HolidaysPage implements OnInit {

  holidays$ = this.store.select('holidays');
  countryCode: string;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private store: Store<HolidaysState>
    ) { 
    this.route.queryParams.subscribe(params => {
        this.countryCode = params['code'];
        console.log(this.countryCode)
    });  
    this.store.dispatch(getHolidays());
  }

  ngOnInit(): void {
    this.holidays$ = this.store.select('holidays');
  }

  onBack(): void {
    this.router.navigate(['home']);
  }

}
