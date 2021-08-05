import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  concatMap,
  filter,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { PayloadState } from 'src/app/shared/models/states/payloadState.model';
import { State } from 'src/app/shared/models/states/state.model';
import { StateObj } from 'src/app/shared/models/states/stateObj.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

import {
  getSelectedStatesDone,
  getSelectedStatesRequest,
  getStatesDone,
  getStatesRequest,
} from './states.actions';
import { selectStates, selectStatesByCountry } from './states.selectors';

@Injectable()
export class StatesEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store
  ) {}

  getStates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStatesRequest),
      switchMap((payload) => {
        return this.apiService
          .getApiData<PayloadState[]>(
            environment.GET_STATES_URL + payload.countryName,
            environment.GET_REQUEST_HEADER(environment.AUTH_TOKEN)
          )
          .pipe(
            map((states) =>
              states.map((state): StateObj => {
                return { name: state.state_name };
              })
            ),
            map((states) => {
              return getStatesDone({
                states,
                countryName: payload.countryName,
              });
            })
          );
      })
    )
  );

  getSelectedStates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSelectedStatesRequest),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(selectStates)))
      ),
      mergeMap(([payload, states]) => {
        const state: State | undefined = states.find(
          (state) => state.country_name === payload.countryName
        );

        if (!state) {
          return of(getStatesRequest({ countryName: payload.countryName }));
        }

        return of(getSelectedStatesDone());
      })
    )
  );
}
