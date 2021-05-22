import { createReducer, on } from '@ngrx/store';
import { Country } from '../shared/models/countries/country.model';
import { State } from '../shared/models/states/state.model';
import { StateObj } from '../shared/models/states/stateObj.model';
import { addDataRequest } from './add-data-form.actions';
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
  }),
  on(addDataRequest, (storeState, action) => {
    const statesIndex: number = storeState.findIndex(
      (state) => state.country_name === action.countryName
    );

    if (statesIndex >= 0) {
      const stateIndex: number = storeState[statesIndex].states.findIndex(
        (state) => state.name === action.stateName
      );

      if (stateIndex >= 0) {
        return [...storeState];
      }

      return [
        ...storeState.slice(0, statesIndex),
        {
          country_name: action.countryName,
          states: [
            ...storeState[statesIndex].states,
            { name: action.stateName },
          ],
        },
        ...storeState.slice(statesIndex + 1),
      ];
    }

    return [
      ...storeState,
      {
        country_name: action.countryName,
        states: [{ name: action.stateName }],
      },
    ];
  })
);
