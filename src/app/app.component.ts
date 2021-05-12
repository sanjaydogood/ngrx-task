import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Country } from './models/country.model';
import { getCountriesRequest } from './state/country.actions';
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
  constructor(private store: Store) {}

  getCountriesData() {
    this.store.dispatch(getCountriesRequest());
    this.isUserLoggedIn = true;
  }
}
