import Router from 'express';
import todosControllers from './todos.controllers.js';

const todosRoutes = Router();
todosRoutes.route('/')
  .get(todosControllers.getAllTodos);

todosRoutes.route('/create')
  .post(todosControllers.createTodo);

export { todosRoutes };