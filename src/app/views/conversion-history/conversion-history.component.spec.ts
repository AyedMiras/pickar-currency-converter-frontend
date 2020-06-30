import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionHistoryComponent } from './conversion-history.component';
import {HttpClient} from '@angular/common/http';
import {providerDef} from '@angular/compiler/src/view_compiler/provider_compiler';
import {CurrencyConversionService} from '../../services/currency-conversion.service';

describe('ConversionHistoryComponent', () => {
  let component: ConversionHistoryComponent;
  let fixture: ComponentFixture<ConversionHistoryComponent>;
  let currencyConversionService: jasmine.SpyObj<CurrencyConversionService>;

  beforeEach(async(() => {
    currencyConversionService = jasmine.createSpyObj('CurrencyConversionService', ['getCurrencyConversionHistory']);
    TestBed.configureTestingModule({
      declarations: [ ConversionHistoryComponent ],
      providers: [
        {provide: CurrencyConversionService, useValue: currencyConversionService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
