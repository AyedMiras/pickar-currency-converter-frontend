import { TestBed } from '@angular/core/testing';

import { CurrencyLayerService } from './currency-layer.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

describe('CurrencyLayerService', () => {
  let service: CurrencyLayerService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        CurrencyLayerService,
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });
    service = TestBed.inject(CurrencyLayerService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCurrencyExchangeRate should return real value', async () => {
    const stubValue = {
      quotes: {
        USDEUR: 1.25
      }
    };
    httpClientSpy.get.and.returnValue(of(stubValue));
    const result = await service.getCurrencyExchangeRate('USD', 'EUR');
    expect(result).toBe(1.25);
  });
});
