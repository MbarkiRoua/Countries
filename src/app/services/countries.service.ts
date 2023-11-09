import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountriesByLang(lang: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}${lang}`);
  }
  getAllCountries(): Observable<any> {
    return this.http.get(`${environment.baseUrlAll}`);
  }
}
