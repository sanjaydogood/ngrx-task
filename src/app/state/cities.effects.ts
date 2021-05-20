import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  concatMap,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { City } from '../shared/models/cities/city.model';
import { CityObj } from '../shared/models/cities/cityObj.model';
import { PayloadCity } from '../shared/models/cities/payloadCity.model';
import { ApiService } from '../shared/services/api.service';
import {
  getCitiesDone,
  getCitiesRequest,
  getSelectedCitiesDone,
  getSelectedCitiesRequest,
} from './cities.actions';
import { selectCities } from './cities.selectors';

@Injectable()
export class CitiesEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store
  ) {}

  getCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCitiesRequest),
      switchMap((payload) =>
        this.apiService
          .getApiData<PayloadCity[]>(
            environment.GET_CITIES_URL + payload.stateName,
            environment.GET_REQUEST_HEADER(environment.AUTH_TOKEN)
          )
          .pipe(
            map((cities) =>
              cities.map((city): CityObj => {
                return { name: city.city_name };
              })
            ),
            map((cities) => {
              return getCitiesDone({
                countryName: payload.countryName,
                stateName: payload.stateName,
                cities,
              });
            })
          )
      )
    );
  });

  getSelectedCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getSelectedCitiesRequest),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(selectCities)))
      ),
      mergeMap(([payload, cities]) => {
        const state: City | undefined = cities.find(
          (city) =>
            city.country_name === payload.countryName &&
            city.state_name === payload.stateName
        );

        console.log(state);
        if (!state) {
          console.log('state is undefined');
          return of(
            getCitiesRequest({
              countryName: payload.countryName,
              stateName: payload.stateName,
            })
          );
        }

        return of(getSelectedCitiesDone());
      })
    );
  });
}
