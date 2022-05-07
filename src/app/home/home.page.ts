import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryState } from '../store/reducers/country.reducers';
import { getCountries } from '../store/actions/country.action';
import { Observable } from 'rxjs';
import { Country } from '../models/countries';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  countries: Country[];
  countries$ = this.store.select('countries')
  
  //= this.store.select('countries');
  constructor(private store: Store<CountryState> ) {}


  ngOnInit(): void {

    this.countries$ = this.store.select('countries')
    this.store.select('countries').subscribe( returno => { console.log(returno) })
    console.log(this.countries$)
  }
  /*
  async getCountries() {
    await this.store.dispatch(getCountries());
    
    
    this.countries$ = this.store.select('countries');

    console.log(this.countries$)
  }*/

}
