import { createAction, props } from '@ngrx/store';

export const addDataRequest = createAction(
  '[ADD DATA FORM] Request to update Data locally and call POST API',
  props<{ countryName: string; stateName: string; cityName: string }>()
);

export const addDataDone = createAction(
  '[ADD DATA FORM] Response to addDataRequest action'
);
