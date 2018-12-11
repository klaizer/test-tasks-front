import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  declOfNum(number: number, array: any) {
      number = Math.abs(number);
      const cases = [2, 0, 1, 1, 1, 2];
      return array[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }
}
