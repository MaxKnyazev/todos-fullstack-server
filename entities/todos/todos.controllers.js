import TodosServices from './todos.services.js';

class TodosControllers {
  getAllTodos = async (req, res) => {
    try {
      const todos = await TodosServices.getAllTodos();
      return res.status(200).json({
        todos,
        error: null,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error
      });
    }
  }

  createTodo = async (req, res) => {
    try {
      const { title, userId } = req.body;

      if (typeof(title) !== 'string') {
        title = String(title);
      }

      if (!title) {
        return res.status(400).json({
          error: 'Передана пустая строка',
        });
      }

      let todo = await TodosServices.createTodo({title, userId});
      todo = todo.dataValues;

      return res.status(200).json({
        todo,
        error: null,
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error
      });
    }
  }
}

export default new TodosControllers();