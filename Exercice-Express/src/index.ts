import express from 'express';
import { Todo } from './todos/todos.model';
import { todosRoutes } from './todos/todos.routes';


const app = express();

// Ajouter vos routes ici :
// ...
app.use('/api/todos', todosRoutes);

app.listen(4000, () => {
  console.log('Server started on http://localhost:4000');
});
