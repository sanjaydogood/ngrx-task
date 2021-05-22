import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { citiesReducer } from './cities.reducers';
import { countriesReducer } from './country.reducer';
import { statesReducer } from './states.reducer';

export const rootReducer: ActionReducerMap<AppState> = {
  countries: countriesReducer,
  states: statesReducer,
  cities: citiesReducer,
};
