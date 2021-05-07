import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Country } from './models/country.model';
import {
  addCountry,
  getCountriesDone,
  getCountriesRequest,
  removeCountry,
} from './state/country.actions';
import { selectCountries } from './state/country.selectors';

const sortAscCountry = (a: Country, b: Country): number => {
  if (a.name < b.name) return -1;
  else if (a.name > b.name) return 1;
  return 0;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home-depot-task';

  countries$ = this.store
    .pipe(select(selectCountries))
    .pipe(
      map((countries) =>
        countries.map(({ name, capital }): Country => ({ name, capital }))
      )
    )
    .pipe(map((countries) => countries.sort(sortAscCountry)));

  isUserLoggedIn = false;

  addCountryForm = new FormGroup({
    country: new FormControl(''),
    capital: new FormControl(''),
  });

  removeCountryForm = new FormGroup({
    country: new FormControl(''),
  });

  constructor(private store: Store) {}

  removeCountry() {
    const CountryName: string = this.removeCountryForm.get('country').value;
    this.store.dispatch(removeCountry({ CountryName }));
    this.removeCountryForm.reset();
  }

  addCountry() {
    const countryName = this.addCountryForm.get('country').value;
    const capitalName = this.addCountryForm.get('capital').value;
    const Country: Country = { name: countryName, capital: capitalName };
    this.store.dispatch(addCountry({ Country }));
    this.addCountryForm.reset();
  }

  getCountriesData() {
    this.store.dispatch(getCountriesRequest());
    this.isUserLoggedIn = true;
  }
}
