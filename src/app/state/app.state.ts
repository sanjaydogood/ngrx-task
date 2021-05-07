import { Country } from './../models/country.model';

export interface AppState {
  countries: ReadonlyArray<Country>;
}
