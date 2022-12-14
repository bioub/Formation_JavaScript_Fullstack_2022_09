import express from 'express';
import { todosRoutes } from './todos/todos.routes';

import { connect } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

// Ajouter vos routes ici :
// ...
app.use('/api/todos', todosRoutes);

const { PORT, DB_HOST, DB_PORT, DB_NAME } = process.env;

connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
