import { addDataRequest } from './add-data-form.actions';
import { combineReducers, createReducer, on } from '@ngrx/store';
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
  on(getCountriesDone, (_, { countries }) => [...countries]),
  on(addDataRequest, (storeState, action) => {
    const country: Country | undefined = storeState.find(
      (country) => country.name === action.countryName
    );

    if (country) {
      return [...storeState];
    }
    return [...storeState, { name: action.countryName }];
  })
);
