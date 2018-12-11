import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../../shared/models/ticket.models';
import {Currency} from '../../shared/models/currency.models';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() tickets: Ticket[];
  @Input() currency: Currency;

  stopsDeclension = [
    'ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК', 'БЕЗ ПЕРЕСАДОК'
  ];

  constructor(private sharedService: SharedService) { }

  ngOnInit() { }

  wordsDeclension(number) {
    if (+number === 0) {
      return this.stopsDeclension[this.stopsDeclension.length - 1];
    } else if (+number) {
      const word = this.sharedService.declOfNum(number, this.stopsDeclension);
      return `${number} ${word}`;
    } else {
      return '';
    }
  }

  transformDateToUTC(date: string) {
    const tap = date.split('.');

    if (tap && tap.length === 3) {
      return `20${tap[2]}-${tap[1]}-${tap[1]}`;
    } else {
      return date;
    }
  }

}
