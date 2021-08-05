import { createFeatureSelector, createSelector } from '@ngrx/store';
import { City } from 'src/app/shared/models/cities/city.model';

export const selectCitiesFeatureSlice = createFeatureSelector<City[]>('cities');
export const selectCities = createSelector(
  selectCitiesFeatureSlice,
  (storeState: City[]) => storeState
);

export const selectCitiesByState = createSelector(
  selectCitiesFeatureSlice,
  (cities: City[], { country, state }) => {
    if (cities.length) {
      const city: City | undefined = cities.find(
        (city) => city.country_name === country && city.state_name === state
      );
      if (city) return city.cities;
    }
    return [];
  }
);
