import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ex-multi-state-button',
  templateUrl: './ex-multi-state-button.component.html',
  styleUrls: ['./ex-multi-state-button.component.scss']
})
export class ExMultiStateButtonComponent implements OnInit {

  @Input() items = ['Item 1', 'Item 2', 'Item 3']
  @Input() value = 'Item 2'

  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectNext() {
    const currentIndex = this.items.indexOf(this.value);
    const nextIndex = (currentIndex + 1) % this.items.length;
    this.value = this.items[nextIndex];
    this.valueChange.emit(this.value);
  }
}
