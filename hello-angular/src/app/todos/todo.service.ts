import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  delete = new EventEmitter<Todo>();

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Todo[]>('http://localhost:3000/api/todos');
  }

  create(todo: Todo) {
    return this.httpClient.post<Todo>('http://localhost:3000/api/todos', todo);
  }
}
