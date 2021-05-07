import { Country } from './../models/country.model';
import { createAction, props } from '@ngrx/store';

export const getCountriesDone = createAction(
  '[APP] Get Countries Done',
  props<{ Country: Array<Country> }>()
);

export const addCountry = createAction(
  '[APP] Add Country',
  props<{ Country: Country }>()
);

export const removeCountry = createAction(
  '[APP] Remove Country',
  props<{ CountryName: string }>()
);

export const getCountriesRequest = createAction('[APP] Get Countries Request');
