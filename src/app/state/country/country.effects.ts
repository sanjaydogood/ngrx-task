import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Country } from 'src/app/shared/models/countries/country.model';
import { PayloadCountry } from 'src/app/shared/models/countries/payloadCountry.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

import {
  getCountriesDone,
  getCountriesRequest,
  getCountriesDoneExists,
} from './country.actions';
import { selectCountries } from './country.selectors';

@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store
  ) {}

  getCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCountriesRequest),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(selectCountries)))
      ),
      switchMap(([_, countries]) => {
        if (!countries.length) {
          return this.apiService
            .getApiData<PayloadCountry[]>(
              environment.GET_COUNTRIES_URL,
              environment.GET_REQUEST_HEADER(environment.AUTH_TOKEN)
            )
            .pipe(
              map((countries): Country[] =>
                countries.map((country) => {
                  return { name: country.country_name };
                })
              ),
              map((countries) => getCountriesDone({ countries }))
            );
        }

        return of(getCountriesDoneExists());
      })
    )
  );
}
