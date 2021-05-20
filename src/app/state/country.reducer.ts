import { createReducer, on, Store } from '@ngrx/store';
import { Country } from '../shared/models/countries/country.model';
import { getCountriesDone } from './country.actions';

export const initialState: Country[] = [];

// export const countriesReducer = createReducer(
//   initialState,
//   on(addCountry, (state, { Country }) => [...state, Country]),
//   on(removeCountry, (state, { CountryName }) =>
//     state.filter((country) => country.name !== CountryName)
//   ),
//   on(getCountriesDone, (_, { Country }) => [...Country])
// );

export const countriesReducer = createReducer(
  initialState,
  on(getCountriesDone, (_, { countries }) => {
    console.log(countries);
    return [...countries];
  })
);
