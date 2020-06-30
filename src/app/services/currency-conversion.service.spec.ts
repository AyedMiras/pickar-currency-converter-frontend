import {async, TestBed} from '@angular/core/testing';
import {CurrencyConversionService} from './currency-conversion.service';
import {CurrencyLayerService} from './currency-layer.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {of} from 'rxjs';


describe('CurrencyConversionService', () => {
  let currencyConversionService: CurrencyConversionService;
  let currencyLayerServiceSpy: jasmine.SpyObj<CurrencyLayerService>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    currencyLayerServiceSpy = jasmine.createSpyObj('CurrencyLayerService', ['getCurrencyExchangeRate']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    TestBed.configureTestingModule({
      providers: [
        CurrencyConversionService,
        {provide: CurrencyLayerService, useValue: currencyLayerServiceSpy},
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });
    currencyConversionService = TestBed.inject(CurrencyConversionService);
    currencyLayerServiceSpy = TestBed.inject(CurrencyLayerService) as jasmine.SpyObj<CurrencyLayerService>;
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(currencyConversionService).toBeTruthy();
  });

  it('#convertCurrency should convert input currency amount', async () => {
    const stubValue = 1.25;
    currencyLayerServiceSpy.getCurrencyExchangeRate.and.returnValue(Promise.resolve(stubValue));
    httpClientSpy.post.and.returnValue(of());
    const result = await currencyConversionService.convertCurrency(1, 'USD', 'EUR');
    expect(result).toBe(1.25);
  });
});
