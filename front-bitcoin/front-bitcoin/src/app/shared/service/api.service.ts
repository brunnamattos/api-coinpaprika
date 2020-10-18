import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consult } from 'src/app/shared/model/consult.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getApiCoinToday(type: string): Observable<Consult> {
    return this.httpClient.get<Consult>(this.apiUrl + type)
  }

  public getApiCoinHistorical(type: string, start: string, end: string): Observable<Consult> {
    return this.httpClient.get<Consult>(this.apiUrl + type + '?' + 'start=' + start + '&end='+ end)
  }
}