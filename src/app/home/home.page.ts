import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { CountryState } from '../store/reducers/country.reducers';
import { getCountries } from '../store/actions/country.action';
import { Observable } from 'rxjs';
import { Country } from '../models/countries';
import { Holiday } from '../models/holidays';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  countries: Country[];
  countries$ = this.store.select('countries')
  all: any;
  //= this.store.select('countries');
  constructor(
    private router: Router,
    private store: Store<CountryState> 
    ) {
    this.store.select(state => state).subscribe( val => 
      { 
        //console.log(val)
        /*
        let attributes = Object.keys(val)
        console.log(attributes)
        for (const k in val) {
          if(k.length === 9)
          this.countries = val[k];
          
          console.log(value)
          console.log(k)
          //this.countries = k;
          console.log(k.length)
          if(k==='countries'){
            console.log('Verdade')
          }*
        }*/
      }
      );
  }


  ngOnInit(): void {
    //this.countries$ = this.store.pipe(select());
    //console.log(this.all.countries)
    this.countries$ = this.store.select('countries');
    //console.log(this.countries$)
  }
  navigateToHolidays(country: Country): void {
    console.log(country);
    this.router.navigate(['/holidays',country.code])
    
  }



}
