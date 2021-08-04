import { createAction, props } from '@ngrx/store';
import { CityObj } from '../../shared/models/cities/cityObj.model';

// When states are not found locally and a API call has to be made
export const getCitiesRequest = createAction(
  '[CITIES] Make API call for Cities Data',
  props<{ countryName: string; stateName: string }>()
);

// When states are not found locally and a API call has to be made, which results in a response handled by this
export const getCitiesDone = createAction(
  '[CITIES] Response of Cities Data API call',
  props<{ countryName: string; stateName: string; cities: CityObj[] }>()
);

export const getSelectedCitiesRequest = createAction(
  '[CITIES] Get cities of given state',
  props<{ countryName: string; stateName: string }>()
);

export const getSelectedCitiesDone = createAction(
  '[CITIES] Completion of get cities'
);
