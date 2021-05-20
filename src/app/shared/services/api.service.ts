import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHeader } from '../models/http/httpHeader.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getApiData<PayloadType>(
    url: string,
    headerData: HttpHeader = {}
  ): Observable<PayloadType> {
    return this.httpClient.get<PayloadType>(url, {
      headers: new HttpHeaders(headerData),
    });
  }
}
