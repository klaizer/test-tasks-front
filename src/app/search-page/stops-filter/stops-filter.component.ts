import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stops-filter',
  templateUrl: './stops-filter.component.html',
  styleUrls: ['./stops-filter.component.scss']
})


export class StopsFilterComponent implements OnInit {

  @Output() filterChange = new EventEmitter<number[]>();

  filters: Filter[] = [
    {value: 0, label: 'Без пересадок', select: false},
    {value: 1, label: '1 пересадка', select: false},
    {value: 2, label: '2 пересадки', select: false},
    {value: 3, label: '3 пересадки', select: false},
  ];
  selectFilters = new Set();

  allSelect = false;

  constructor() {}

  ngOnInit() {}

  setSelect(filter: Filter) {
    filter.select = !filter.select;
    this.allSelect = this.filters.every(f => f.select);

    if (filter.select) {
      this.selectFilters.add(filter.value);
    } else {
      this.selectFilters.delete(filter.value);
    }

    this.emitChange();
  }

  selectAll() {
    this.allSelect = !this.allSelect;
    this.filters.forEach(f => f.select = this.allSelect);

    if (this.allSelect) {
      this.selectFilters = new Set<any>(this.filters.map(f => f.value));
    } else {
      this.selectFilters = new Set<any>();
    }

    this.emitChange();
  }

  selectOnly(event: any, filter: Filter) {
    event.stopPropagation();

    this.filters.forEach(f => f.select = false);
    filter.select = !filter.select;
    this.allSelect = false;

    this.selectFilters = new Set<any>([filter.value]);

    this.emitChange();
  }

  emitChange() {
    this.filterChange.emit(Array.from(this.selectFilters));
  }

}

interface Filter {
  value: number;
  label: string;
  select: boolean;
}

