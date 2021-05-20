import { createReducer, on } from '@ngrx/store';
import { State } from '../shared/models/states/state.model';
import { getStatesDone } from './states.actions';

const initialState: State[] = [];
export const statesReducer = createReducer(
  initialState,
  on(getStatesDone, (currentState, { states, countryName }) => {
    return [
      ...currentState,
      {
        country_name: countryName,
        states,
      },
    ];
  })
);
