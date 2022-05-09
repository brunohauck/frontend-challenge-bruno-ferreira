import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { CountryState } from '../store/reducers/country.reducers';
import { Country } from '../models/countries';
import { getCountries } from '../store/actions/country.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  countries$ = this.store.select('countries')
  constructor(
    private router: Router,
    private store: Store<CountryState> 
    ) {
      this.store.dispatch(getCountries());
  }

  ngOnInit(): void {
    this.countries$ = this.store.select('countries');
  }
  navigateToHolidays(country: Country): void {
    this.router.navigate(['/holidays',country.code])
  }
}
