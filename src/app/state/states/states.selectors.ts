import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from 'src/app/shared/models/states/state.model';

export const selectStatesFeatureSlice =
  createFeatureSelector<ReadonlyArray<State>>('states');

export const selectStates = createSelector(
  selectStatesFeatureSlice,
  (states: State[]) => states
);

export const selectStatesByCountry = createSelector(
  selectStatesFeatureSlice,
  (states: State[], countryName: string) => {
    if (states.length) {
      const state: State | undefined = states.find(
        (state) => state.country_name === countryName
      );
      if (state) return state.states;
    }
    return [];
  }
);
