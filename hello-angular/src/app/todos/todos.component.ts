import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {
      _id: 'abc123',
      title: 'ABC',
      completed: true,
    },
    {
      _id: 'def987',
      title: 'DEF',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  insertTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
