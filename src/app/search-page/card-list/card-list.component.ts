import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../../shared/models/ticket.models';
import {Currency} from '../../shared/models/currency.models';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() tickets: Ticket[];
  @Input() currency: Currency;

  constructor() { }

  ngOnInit() { }

}
