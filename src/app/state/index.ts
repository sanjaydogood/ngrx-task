import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { citiesReducer } from './cities/cities.reducers';
import { countriesReducer } from './country/country.reducer';
import { statesReducer } from './states/states.reducer';

export const rootReducer: ActionReducerMap<AppState> = {
  countries: countriesReducer,
  states: statesReducer,
  cities: citiesReducer,
};
