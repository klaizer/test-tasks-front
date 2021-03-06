import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Ticket} from '../shared/models/ticket.models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<Ticket[]> {
    return this.http.get('./../../assets/tickets.json')
      .pipe(
        map((data: any) => data.tickets),
        tap(tickets => {
          if (tickets) {
            tickets.sort((a, b) => a.price - b.price);
          }
        }),
        catchError(val => of(`I caught: ${val}`))
      );
  }
}
