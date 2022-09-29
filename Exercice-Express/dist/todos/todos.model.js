"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosModel = void 0;
class TodosModel {
    static nextId() {
        return (this.todos.reduce((acc, t) => (t.id ?? 0 > acc ? t.id ?? 0 : acc), 0) + 1);
    }
    static findAll() {
        return Promise.resolve(this.todos);
    }
    static findById(id) {
        if (typeof id === 'string') {
            id = Number(id);
        }
        const todo = this.todos.find((t) => t.id === id);
        return Promise.resolve(todo);
    }
    static create(todo) {
        const newTodo = {
            id: this.nextId(),
            ...todo,
        };
        this.todos.push(newTodo);
        return Promise.resolve(newTodo);
    }
}
exports.TodosModel = TodosModel;
TodosModel.todos = [
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
