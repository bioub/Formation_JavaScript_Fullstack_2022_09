import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {

  @Input() items = ['Item 1', 'Item 2', 'Item 3']
  @Input() value = 'Item 2'

  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  select(item: string) {
    this.value = item;
    this.valueChange.emit(item);
  }
}
