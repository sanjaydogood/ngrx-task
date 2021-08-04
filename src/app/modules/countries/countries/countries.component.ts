import { Component, Input, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from 'src/app/shared/models/countries/country.model';
import { getCountriesRequest } from 'src/app/state/country/country.actions';
import { selectCountries } from 'src/app/state/country/country.selectors';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countryRows$: Observable<Country[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.countryRows$ = this.store.pipe(select(selectCountries));
    this.store.dispatch(getCountriesRequest());
    // this.apiService
    //   .getApiData<PayloadCountry[]>(
    //     environment.GET_COUNTRIES_URL,
    //     environment.GET_REQUEST_HEADER(environment.AUTH_TOKEN)
    //   )
    //   .pipe(map((val) => this.transformData(val)))
    //   .pipe(map((val) => transformRows(val)));
  }

  removeCountry(rowId: string) {
    // this._removeRow.emit(rowId);
  }

  // transformData = (data: PayloadCountry[]): tableRow[] => {
  //   const countries: tableRow[] = [];
  //   for (let index = 0; index < data.length; index++) {
  //     countries.push({ id: -404, name: data[index].country_name });
  //   }
  //   return countries;
  // };
}
