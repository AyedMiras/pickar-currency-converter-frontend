import { Injectable } from '@angular/core';
import {CurrencyLayerService} from './currency-layer.service';
import {HttpClient} from '@angular/common/http';
import {CurrencyConversion} from '../models/currency-conversion';
import {CurrencyConversionHistoryItem} from '../models/currency-conversion-history-item';
import {CURRENCIES} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {

  private API_BASE_ENDPOINT = 'http://localhost:8080/api/history';

  constructor(
    private currencyLayerService: CurrencyLayerService,
    private httpClient: HttpClient
  ) {
  }

  async convertCurrency(amount: number, from: string, to: string): Promise<number> {
    const currencyExchangeRate = await this.currencyLayerService.getCurrencyExchangeRate(from, to);
    const result = amount * currencyExchangeRate;
    const currencyConversion: CurrencyConversion = {
      toCurrency: to,
      fromCurrency: from,
      amount,
      exchangeRate: currencyExchangeRate,
      result: amount * currencyExchangeRate
    };
    await this.saveCurrencyConversion(currencyConversion);
    return result;
  }

  async saveCurrencyConversion(currencyConversion: CurrencyConversion) {
    await this.httpClient.post(this.API_BASE_ENDPOINT, currencyConversion).toPromise();
  }

  async getCurrencyConversionHistory(): Promise<Array<CurrencyConversionHistoryItem>> {
    return await this.httpClient.get<Array<CurrencyConversionHistoryItem>>(this.API_BASE_ENDPOINT).toPromise();
  }

  getCurrenciesList() {
    return CURRENCIES;
  }
}
