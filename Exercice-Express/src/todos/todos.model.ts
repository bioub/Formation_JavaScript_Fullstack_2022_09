import { Schema, model } from 'mongoose';

export interface Todo {
 // id?: number;
  title?: string;
  completed?: boolean;
}

const todoSchema = new Schema<Todo>({
  title: { type: String, required: [true, 'Title is mandatory'] },
  completed: Boolean, // raccourci de { type: Boolean }
});

export const TodosModel = model<Todo>('Todo', todoSchema);

/*
export class TodosModel {
  static todos: Todo[] = [
    {
      id: 1,
      title: 'Acheter du pain',
      completed: false,
    },
    {
      id: 2,
      title: 'Introduire Express',
      completed: true,
    },
  ];

  private static nextId() {
    return (
      this.todos.reduce((acc, t) => (t.id ?? 0 > acc ? t.id ?? 0 : acc), 0) + 1
    );
  }

  static find() {
    return Promise.resolve(this.todos);
  }

  static findById(id: string | number) {
    if (typeof id === 'string') {
      id = Number(id);
    }

    const todo = this.todos.find((t) => t.id === id);
    return Promise.resolve(todo);
  }

  static create(todo: Todo) {
    const newTodo = {
      id: this.nextId(),
      ...todo,
    };

    this.todos.push(newTodo);

    return Promise.resolve(newTodo);
  }
}
*/
