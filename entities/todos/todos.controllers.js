import TodosServices from './todos.services.js';

class TodosControllers {
  getAllTodos = async (req, res) => {
    try {
      const todos = await TodosServices.getAllTodos();
      return res.status(200).json({
        todos,
        error: null,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: err.message
      });
    }
  }
}

export default new TodosControllers();