import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  baseUrl = ' https://restcountries.com/v3.1/lang/';
  baseUrlAll = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getCountriesByLang(lang: string): Observable<any> {
    return this.http.get(this.baseUrl + lang);
  }
  getAllCountries(): Observable<any> {
    return this.http.get(this.baseUrlAll);
  }
}
