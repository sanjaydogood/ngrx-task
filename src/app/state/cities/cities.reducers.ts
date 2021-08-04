import { getCitiesDone } from './cities.actions';
import { createReducer, on } from '@ngrx/store';
import { City } from 'src/app/shared/models/cities/city.model';
import { addDataRequest } from '../add-data-form/add-data-form.actions';

const initialState: City[] = [];
export const citiesReducer = createReducer(
  initialState,
  on(getCitiesDone, (storeState, { countryName, stateName, cities }) => {
    return [
      ...storeState,
      { country_name: countryName, state_name: stateName, cities },
    ];
  }),
  on(addDataRequest, (storeState, action) => {
    const countryStateIndex: number = storeState.findIndex(
      (countryState) =>
        countryState.country_name === action.countryName &&
        countryState.state_name === action.stateName
    );

    if (countryStateIndex >= 0) {
      const cityIndex: number = storeState[countryStateIndex].cities.findIndex(
        (city) => city.name === action.cityName
      );

      if (cityIndex >= 0) {
        return [...storeState];
      }

      return [
        ...storeState.slice(0, countryStateIndex),
        {
          country_name: action.countryName,
          state_name: action.stateName,
          cities: [
            ...storeState[countryStateIndex].cities,
            { name: action.cityName },
          ],
        },
        ...storeState.slice(countryStateIndex + 1),
      ];
    }
    return [
      ...storeState,
      {
        country_name: action.countryName,
        state_name: action.stateName,
        cities: [{ name: action.cityName }],
      },
    ];
  })
);
