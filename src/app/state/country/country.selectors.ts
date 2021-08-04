import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Country } from '../shared/models/countries/country.model';

// export const selectCountries = createSelector(
//   (state: AppState) => state.countries,
//   (countries: Array<Country>) => countries
// );

export const selectCountriesFeatureSlice =
  createFeatureSelector<Country[]>('countries');

export const selectCountries = createSelector(
  selectCountriesFeatureSlice,
  (countries) => countries
);
