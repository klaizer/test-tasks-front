import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {delay} from 'rxjs/operators';

import {Currency} from '../../shared/models/currency.models';
import {CurrencyApiService} from '../../shared/currency-api.service';

@Component({
  selector: 'app-currency-filter',
  templateUrl: './currency-filter.component.html',
  styleUrls: ['./currency-filter.component.scss']
})
export class CurrencyFilterComponent implements OnInit {

  @Output() changeCurrency = new EventEmitter<any>();

  currencies: Currency[] = [
    { sign: '₽', key: 'RUB', rate: 1, select: true},
    { sign: '$', key: 'USD', rate: null, select: false},
    { sign: '€', key: 'EUR', rate: null, select: false}
  ];

  constructor(private service: CurrencyApiService) {}

  ngOnInit() {
    const defaultCurrency = this.currencies[0];
    this.emitCurrency(defaultCurrency);


    this.service.getCurrencyRate()
      .pipe(
        delay(2000)
      )
      .subscribe(resp => {
      this.currencies[1].rate = resp['RUB_USD'];
      this.currencies[2].rate = resp['RUB_EUR'];
    });
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

