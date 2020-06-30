import { Component, OnInit } from '@angular/core';
import {CurrencyConversionService} from '../../services/currency-conversion.service';
import {CurrencyConversionHistoryItem} from '../../models/currency-conversion-history-item';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.css']
})
export class ConversionHistoryComponent implements OnInit {

  public currencyConversionHistory: Array<CurrencyConversionHistoryItem>;

  constructor(private currencyConversionService: CurrencyConversionService) { }

  async ngOnInit() {
    this.currencyConversionHistory = await this.currencyConversionService.getCurrencyConversionHistory();
  }

}
