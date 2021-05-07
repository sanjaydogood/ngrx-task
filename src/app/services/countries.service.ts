import { map } from 'rxjs/operators';
import { Country } from './../models/country.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  getApiData(): Observable<Array<Country>> {
    return this.httpClient.get<Array<Country>>(
      'https://restcountries.eu/rest/v2/all'
    );
  }
}
