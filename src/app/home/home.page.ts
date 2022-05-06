import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountriesState } from '../store/reducers/country.reducers';
import { getCountries } from '../store/actions/country.action';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  countries$ = this.store.select('countries');
  constructor(private store: Store<CountriesState> ) {}


  ngOnInit(): void {
    this.getCountries();
  }
  async getCountries() {
    await this.store.dispatch(getCountries());
    this.countries$ = this.store.select('countries');
    console.log(this.countries$)
  }

}
