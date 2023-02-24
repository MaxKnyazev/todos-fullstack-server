import { Todo } from './todos.model.js';

class TodosServices {
  getAllTodos = async () => {
    try {
      const todos = await Todo.findAll({
        raw: true,
      })

      return todos;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new TodosServices();