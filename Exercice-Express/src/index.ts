import express from 'express';
import { todosRoutes } from './todos/todos.routes';

import { connect } from 'mongoose';

const app = express();

// Ajouter vos routes ici :
// ...
app.use('/api/todos', todosRoutes);

connect('mongodb://localhost:27017/test').then(() => {
  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000');
  });
});
