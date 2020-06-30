import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionFormComponent } from './conversion-form.component';
import {CurrencyConversionService} from '../../services/currency-conversion.service';
import {CURRENCIES} from '../../app.constants';
import {HttpClient} from '@angular/common/http';

describe('ConversionFormComponent', () => {
  let component: ConversionFormComponent;
  let fixture: ComponentFixture<ConversionFormComponent>;
  let currencyConversionServiceSpy: jasmine.SpyObj<CurrencyConversionService>;

  beforeEach(async(() => {
    currencyConversionServiceSpy = jasmine.createSpyObj('CurrencyConversionService', ['convertCurrency', 'getCurrenciesList']);
    TestBed.configureTestingModule({
      declarations: [ ConversionFormComponent ],
      providers: [
        {provide: CurrencyConversionService, useValue: currencyConversionServiceSpy}
      ]
    })
    .compileComponents();
    currencyConversionServiceSpy = TestBed.inject(CurrencyConversionService) as jasmine.SpyObj<CurrencyConversionService>;
    currencyConversionServiceSpy.getCurrenciesList.and.returnValue(CURRENCIES);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
