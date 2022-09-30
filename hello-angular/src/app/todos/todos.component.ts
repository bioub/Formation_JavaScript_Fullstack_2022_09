import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  // private title: Title;
  // constructor(title: Title) {
  //   this.title = title;
  // }

  constructor(private title: Title, private todoService: TodoService) {}

  ngOnInit(): void {
    this.title.setTitle('Todos');
    // const title = new Title();
    // const httpHandler = new HttpHandler();
    // const httpClient = new HttpClient();
    this.todoService.getAll().subscribe((todos) => {
      this.todos = todos;
    });

    this.todoService.delete.subscribe((todo) => {
      console.log('Todo Item asked to delete ' + todo.title);
    });
  }

  insertTodo(todo: Todo) {
    this.todos.push(todo);
    this.todoService.create(todo).subscribe((newTodo) => {
      todo._id = newTodo._id;
    });
  }
}
