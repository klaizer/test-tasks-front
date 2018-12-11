import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';

import {Ticket} from '../shared/models/ticket.models';
import {Currency} from '../shared/models/currency.models';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  tickets: Ticket[];
  ticketsToDisplay: Ticket[];

  filterParams: number[] = [];

  currency: Currency;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.fetch().subscribe((data: Ticket[]) => {
      this.tickets = data;
      this.filterData();
    });
  }

  filterChange(event: number[]) {
    console.log(event);
    this.filterParams = [...event];
    this.filterData();
  }

  filterData() {
    if (this.filterParams.length) {
      this.ticketsToDisplay = this.tickets.filter((ticket: Ticket) => this.filterParams.includes(ticket.stops));
    } else {
      this.ticketsToDisplay = [...this.tickets];
    }
  }

  changeCurrency(currency: Currency) {
    this.currency = currency;
    console.log(currency);
  }
}
