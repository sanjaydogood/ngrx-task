import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { CountriesService } from '../services/countries.service';
import { getCountriesDone, getCountriesRequest } from './country.actions';

@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private countriesService: CountriesService
  ) {}

  getCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCountriesRequest),
      switchMap(() => {
        return this.countriesService
          .getApiData()
          .pipe(map((Country) => getCountriesDone({ Country })));
      })
    )
  );
}
