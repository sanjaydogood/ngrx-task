import { Country } from './../models/country.model';
import { createReducer, on } from '@ngrx/store';
import {
  addCountry,
  getCountriesDone,
  removeCountry,
  getCountriesRequest,
} from './country.actions';

export const initialState: ReadonlyArray<Country> = [];

export const countriesReducer = createReducer(
  initialState,
  on(addCountry, (state, { Country }) => [...state, Country]),
  on(removeCountry, (state, { CountryName }) =>
    state.filter((country) => country.name !== CountryName)
  ),
  on(getCountriesDone, (_, { Country }) => [...Country])
);
