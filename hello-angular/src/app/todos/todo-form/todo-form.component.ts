import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter<Todo>();

  todo: Todo = {
    title: '',
    completed: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.add.emit({...this.todo});
  }
}
