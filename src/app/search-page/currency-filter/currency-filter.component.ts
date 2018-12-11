import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Currency} from '../../shared/models/currency.models';

@Component({
  selector: 'app-currency-filter',
  templateUrl: './currency-filter.component.html',
  styleUrls: ['./currency-filter.component.scss']
})
export class CurrencyFilterComponent implements OnInit {

  @Output() changeCurrency = new EventEmitter<any>();

  currencies: Currency[] = [
    { sign: '₽', key: 'RUB', rate: 1, select: true},
    { sign: '$', key: 'USD', rate: 0.015, select: false}, // set static exchange rate
    { sign: '€', key: 'EUR', rate: 0.013, select: false} // set static exchange rate
  ];

  constructor() {}

  ngOnInit() {
    const defaultCurrency = this.currencies[0];
    this.emitCurrency(defaultCurrency);
  }

  change(currency: Currency) {
    this.currencies.forEach(c => c.select = false);
    currency.select = true;

    this.emitCurrency(currency);
  }

  emitCurrency(currency: Currency) {
    const {sign, key, rate} = currency;
    this.changeCurrency.emit({sign, key, rate});
  }

}

