import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { getSelectedStatesRequest } from 'src/app/state/states.actions';
import { selectStatesByCountry } from 'src/app/state/states.selectors';
import { StateObj } from 'src/app/shared/models/states/stateObj.model';
import { Country } from 'src/app/shared/models/countries/country.model';
import { getCountriesRequest } from 'src/app/state/country.actions';
import { selectCountries } from 'src/app/state/country.selectors';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
})
export class StatesComponent implements OnInit {
  countryRows$: Observable<Country[]>;
  stateRows$: Observable<StateObj[]>;

  constructor(private apiService: ApiService, private store: Store) {}

  ngOnInit(): void {
    this.countryRows$ = this.store.pipe(select(selectCountries));
    this.store.dispatch(getCountriesRequest());
  }

  removeCountry(rowId: string) {
    // this._removeRow.emit(rowId);
  }

  selectedCountry(countryName: string) {
    this.store.dispatch(getSelectedStatesRequest({ countryName }));
    this.stateRows$ = this.store.pipe(
      select(selectStatesByCountry, countryName)
    );
  }
}
