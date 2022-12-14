import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  @Input() items!: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
