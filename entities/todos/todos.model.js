import { DataTypes } from 'sequelize';
import { database } from '../../database/database.js';

const Todo = database.define('todo', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  isImportant: {
    type: DataTypes.BOOLEAN,
  },

  isDone: {
    type: DataTypes.BOOLEAN,
  },
},
{
  timestamps: false,
});

export { Todo };