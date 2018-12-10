import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  tickets: any;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.fetch().subscribe(data => {
      this.tickets = data;
    });
  }
}
