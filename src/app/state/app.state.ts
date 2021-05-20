import { City } from '../shared/models/cities/city.model';
import { Country } from '../shared/models/countries/country.model';
import { State } from '../shared/models/states/state.model';

export interface AppState {
  countries: ReadonlyArray<Country>;
  states: ReadonlyArray<State>;
  cities: ReadonlyArray<City>;
}
