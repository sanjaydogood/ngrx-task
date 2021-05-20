import { createAction, props } from '@ngrx/store';
import { Country } from '../shared/models/countries/country.model';

// export const getCountriesDone = createAction(
//   '[APP] Get Countries Done',
//   props<{ Country: Array<Country> }>()
// );

// export const addCountry = createAction(
//   '[APP] Add Country',
//   props<{ Country: Country }>()
// );

// export const removeCountry = createAction(
//   '[APP] Remove Country',
//   props<{ CountryName: string }>()
// );

// export const getCountriesRequest = createAction('[APP] Get Countries Request');

// When states are not found locally and a API call has to be made
export const getCountriesRequest = createAction(
  '[COUNTRIES] Make API call for Countries Data'
);

// When states are not found locally and a API call has to be made, which results in a response handled by this
export const getCountriesDone = createAction(
  '[COUNTRIES] Response of Countries Data API call',
  props<{ countries: Country[] }>()
);

export const getCountriesDoneExists = createAction(
  '[COUNTRIES] Response of Countries Data API call already exists'
);
