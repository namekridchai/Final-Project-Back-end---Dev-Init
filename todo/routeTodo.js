import express  from 'express';
import isLogin from '../utils/isLogin.js';
const routerTodo = express.Router({mergeParams:true});
import todoController from './controllerTodo.js'
import isAuthor from '../utils/isAuthor.js';

routerTodo.route('/')
      .post( isLogin,todoController.createTodo)
      .get(isLogin,todoController.getAllTodo)

routerTodo.route('/:id')
        .get(isLogin,isAuthor.isAuthorTodo,todoController.getTodoByID)
        .delete(isLogin,isAuthor.isAuthorTodo,todoController.deleteTodoByID)
        .put(isLogin,isAuthor.isAuthorTodo,todoController.updateTodoByID)
      

      
export default routerTodo;