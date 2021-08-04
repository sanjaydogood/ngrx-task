import { createReducer, on } from '@ngrx/store';
import { City } from '../shared/models/cities/city.model';
import { Country } from '../shared/models/countries/country.model';
import { State } from '../shared/models/states/state.model';
import { addDataRequest } from './add-data-form.actions';
import { AppState } from './app.state';
import { citiesReducer } from './cities.reducers';
import { countriesReducer } from './country.reducer';
import { statesReducer } from './states.reducer';

export const featureReducersMap = {
  countries: countriesReducer,
  states: statesReducer,
  cities: citiesReducer,
};

const initialState: AppState = { countries: [], states: [], cities: [] };
export const addDataFormReducer = createReducer(
  initialState,
  on(
    addDataRequest,
    (storeState: AppState, { countryName, stateName, cityName }) => {
      const country: Country | undefined = storeState.countries.find(
        (country) => country.name === countryName
      );

      const state: State | undefined = storeState.states.find((state) => {
        state.country_name === countryName;
      });

      const city: City | undefined = storeState.cities.find(
        (city) => city.country_name === countryName
      );

      // if (country) {
      // }

      return {
        countries: [...storeState.countries, { name: countryName }],
        states: [
          ...storeState.states,
          { country_name: countryName, states: [{ name: stateName }] },
        ],
        cities: [
          ...storeState.cities,
          {
            country_name: countryName,
            state_name: stateName,
            cities: [{ name: cityName }],
          },
        ],
      };
    }
  )
);
