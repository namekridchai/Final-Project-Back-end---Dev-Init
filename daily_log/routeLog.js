import express  from 'express';
import isLogin from '../utils/isLogin.js';
const routerLog = express.Router({mergeParams:true});
import logController from './controllerLog.js'
import isAuthor from '../utils/isAuthor.js';

routerLog.route('/')
      .post( isLogin,logController.createLog)
      .get(isLogin,logController.getAllLog)

routerLog.route('/:id')
        .get(isLogin,isAuthor.isAuthorLog,logController.getLogByID)
        .delete(isLogin,isAuthor.isAuthorLog,logController.deleteLogByID)
        .put(isLogin,isAuthor.isAuthorLog,logController.updateLogByID)
      

      
export default routerLog;