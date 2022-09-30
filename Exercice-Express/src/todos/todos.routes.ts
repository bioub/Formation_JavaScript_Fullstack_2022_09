import express, { Request, Router } from 'express';
import { Todo, TodosModel } from './todos.model';

const todosRoutes = Router();

todosRoutes.get('', async (req, res) => {
  const todos = await TodosModel.find();
  res.json(todos);
});

todosRoutes.get('/:todoId', async (req, res) => {
  const todo = await TodosModel.findById(req.params.todoId);
  res.json(todo);
});

todosRoutes.post(
  '',
  express.json(),
  async (req: Request<any, any, Todo>, res) => {
    try {
      const todoToInsert = req.body;

      const newTodo = await TodosModel.create(todoToInsert);

      res.statusCode = 201;
      res.json(newTodo);
    } catch (err) {
      res.statusCode = 400;
      res.json({
        err: (err as any).message,
      });
    }
  },
);

export { todosRoutes };
