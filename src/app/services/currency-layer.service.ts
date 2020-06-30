import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CURRENCY_LAYER_API_KEY} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class CurrencyLayerService {

  private readonly API_BASE_ENDPOINT = 'http://apilayer.net/api/';
  constructor(private httpClient: HttpClient) { }

  async getCurrencyExchangeRate(from: string, to: string): Promise<number> {
    const endpoint = this.API_BASE_ENDPOINT + 'live?' + 'access_key=' + CURRENCY_LAYER_API_KEY + '&source=' + from + '&currencies=' + to;
    const apiResult: any = await this.httpClient.get(endpoint).toPromise();
    return apiResult.quotes[from + to];
  }
}
