import { CityObj } from './cityObj.model';

export interface City {
  country_name: string;
  state_name: string;
  cities: CityObj[];
}
