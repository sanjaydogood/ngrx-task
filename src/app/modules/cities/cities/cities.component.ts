import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { CityObj } from 'src/app/shared/models/cities/cityObj.model';
import { Country } from 'src/app/shared/models/countries/country.model';
import { StateObj } from 'src/app/shared/models/states/stateObj.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { getSelectedCitiesRequest } from 'src/app/state/cities/cities.actions';
import { selectCitiesByState } from 'src/app/state/cities/cities.selectors';
import { getCountriesRequest } from 'src/app/state/country/country.actions';
import { selectCountries } from 'src/app/state/country/country.selectors';
import { getSelectedStatesRequest } from 'src/app/state/states/states.actions';
import { selectStatesByCountry } from 'src/app/state/states/states.selectors';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  isCountryTableShown: boolean = true;
  headerText: string = 'Countries';

  selectedCountry: string;

  rows$: Observable<Country[]> | Observable<StateObj[]>;
  cityRows$: Observable<CityObj[]>;

  get _header() {
    this.headerText = this.isCountryTableShown ? 'Countries' : 'States';
    return this.headerText;
  }
  countryRows$: Observable<Country[]>;
  constructor(private apiService: ApiService, private store: Store) {}

  ngOnInit(): void {
    this.rows$ = this.store.pipe(select(selectCountries));
    this.store.dispatch(getCountriesRequest());
  }

  goBackToCountries(): void {
    this.isCountryTableShown = true;
    this.rows$ = this.store.pipe(select(selectCountries));
    this.cityRows$ = EMPTY;
  }

  rowSelected(row: string) {
    if (this._header === 'Countries') {
      this.isCountryTableShown = false;
      this.selectedCountry = row;
      this.store.dispatch(getSelectedStatesRequest({ countryName: row }));
      this.rows$ = this.store.pipe(select(selectStatesByCountry, row));
    } else {
      this.store.dispatch(
        getSelectedCitiesRequest({
          countryName: this.selectedCountry,
          stateName: row,
        })
      );
      this.cityRows$ = this.store.pipe(
        select(selectCitiesByState, {
          country: this.selectedCountry,
          state: row,
        })
      );
    }
  }
}
