import { StateObj } from '../../shared/models/states/stateObj.model';
import { createAction, props } from '@ngrx/store';

// When states are not found locally and a API call has to be made
export const getStatesRequest = createAction(
  '[STATES] Make API call for States Data',
  props<{ countryName: string }>()
);

// When states are not found locally and a API call has to be made, which results in a response handled by this
export const getStatesDone = createAction(
  '[STATES] Response of States Data API call',
  props<{ states: StateObj[]; countryName: string }>()
);

// When states are requested by View layer
export const getSelectedStatesRequest = createAction(
  '[STATES] Get states of given country',
  props<{ countryName: string }>()
);

// When states are found locally
export const getSelectedStatesDone = createAction(
  '[STATES] Completion of get states'
);
