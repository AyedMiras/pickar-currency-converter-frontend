import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CurrencyConversionService} from '../../services/currency-conversion.service';

@Component({
  selector: 'app-conversion-form',
  templateUrl: './conversion-form.component.html',
  styleUrls: ['./conversion-form.component.css']
})
export class ConversionFormComponent implements OnInit {

  public currencies: Array<string>;

  public amount: number;
  public to: string;
  public from: string;

  public result: number;
  public resultBoxAmount: number;
  public resultBoxTo: string;
  public resultBoxFrom: string;

  constructor(
    private currencyConversionService: CurrencyConversionService) { }

  ngOnInit(): void {
    this.currencies = this.currencyConversionService.getCurrenciesList();
    this.amount = 1.00;
    this.from = this.currencies[0];
    this.to = this.currencies[1];
  }

  switch() {
    const aux = this.to;
    this.to = this.from;
    this.from = aux;
  }

  async convertCurrency() {
    this.result = await this.currencyConversionService.convertCurrency(
      this.amount, this.from, this.to
    );
    this.resultBoxAmount = this.amount;
    this.resultBoxFrom = this.from;
    this.resultBoxTo = this.to;
  }


}
