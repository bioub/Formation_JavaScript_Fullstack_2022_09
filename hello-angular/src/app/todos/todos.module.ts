import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodosComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodosListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ],
  exports: [
   // TodosComponent
  ]
})
export class TodosModule { }
