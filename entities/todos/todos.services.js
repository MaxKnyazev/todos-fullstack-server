import { Todo } from './todos.model.js';
import { v4 as uuidv4 } from 'uuid';

class TodosServices {
  getAllTodos = async () => {
    try {
      const todos = await Todo.findAll({
        raw: true,
      })

      return todos;
    } catch (error) {
      throw new Error(error);
    }
  }

  createTodo = async ({title, userId}) => {
    try {
      const id = uuidv4();
      const todo = await Todo.create({
        id,
        user_id: userId,
        title
      });
      console.log(todo);

      return todo;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new TodosServices();