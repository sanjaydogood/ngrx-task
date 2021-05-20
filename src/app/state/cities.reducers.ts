import { getCitiesDone } from './cities.actions';
import { createReducer, on } from '@ngrx/store';
import { City } from '../shared/models/cities/city.model';

const initialState: City[] = [];
export const citiesReducer = createReducer(
  initialState,
  on(getCitiesDone, (storeState, { countryName, stateName, cities }) => {
    console.log([
      ...storeState,
      { country_name: countryName, state_name: stateName, cities },
    ]);
    return [
      ...storeState,
      { country_name: countryName, state_name: stateName, cities },
    ];
  })
);
