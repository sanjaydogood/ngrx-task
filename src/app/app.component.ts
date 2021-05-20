import { Component, OnInit } from '@angular/core';
import { Country } from './shared/models/countries/country.model';
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
export class AppComponent implements OnInit {
  title = 'home-depot-task';

  // countries$ = this.store
  //   .pipe(select(selectCountries))
  //   .pipe(
  //     map((countries) =>
  //       countries.map(({ name, capital }): Country => ({ name, capital }))
  //     )
  //   )
  //   .pipe(map((countries) => countries.sort(sortAscCountry)));

  // isUserLoggedIn = false;
  // constructor(private store: Store<AppState>) {}
  constructor() {}

  ngOnInit(): void {}

  // getCountriesData() {
  //   this.store.dispatch(getCountriesRequest());
  //   this.isUserLoggedIn = true;
}
