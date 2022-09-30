import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-multi-state-button',
  templateUrl: './ex-multi-state-button.component.html',
  styleUrls: ['./ex-multi-state-button.component.scss']
})
export class ExMultiStateButtonComponent implements OnInit {

  items = ['Item 1', 'Item 2', 'Item 3']
  value = 'Item 2'

  constructor() { }

  ngOnInit(): void {
  }

}
