import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @HostBinding('class.checked') @Input() value: boolean;

  constructor() {}

  ngOnInit() {}

}
