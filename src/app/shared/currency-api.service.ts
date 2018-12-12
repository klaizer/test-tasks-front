import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  constructor(private http: HttpClient) { }

  getCurrencyRate(): Observable<any> {
    const param = 'RUB_USD,RUB_EUR';
    return this.http.get(`http://free.currencyconverterapi.com/api/v5/convert?q=${param}&compact=ultra`);
  }
}

