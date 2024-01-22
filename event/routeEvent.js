import express  from 'express';
import isLogin from '../utils/isLogin.js';
const routerEvent = express.Router({mergeParams:true});
import logController from './controllerEvent.js'
import isAuthor from '../utils/isAuthor.js';

routerEvent.route('/')
      .post( isLogin,logController.createEvent)
      .get(isLogin,logController.getAllEvent)

routerEvent.route('/:id')
        .get(isLogin,isAuthor.isAuthorEvent,logController.getEventByID)
        .delete(isLogin,isAuthor.isAuthorEvent,logController.deleteEventByID)
        .put(isLogin,isAuthor.isAuthorEvent,logController.updateEventByID)
      

      
export default routerEvent;