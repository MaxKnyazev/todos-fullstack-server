import express from 'express';
import * as dotenv from 'dotenv';
import chalk from 'chalk';
import cors from 'cors';
import { database } from './database/database.js';
import { Todo } from './entities/todos/todos.model.js';
import { todosRoutes } from './entities/todos/todos.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use('/todos', todosRoutes);

const start = async () => {
  try {
    await database.authenticate();
    console.log(chalk.blue(`Connection to DB established...`));  
    
    await Todo.sync({});
    console.log(chalk.blue(`Todos synchronization successful...`));  

    app.listen(PORT, () => {
      console.log(chalk.blue(`Starting on PORT = ${PORT}`));  
    })
  } catch (err) {
    console.error(chalk.bgRed(err));
  }
}
start();