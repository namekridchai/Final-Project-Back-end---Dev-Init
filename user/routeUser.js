import express  from 'express';
const routerUser = express.Router({mergeParams:true});
import userController from './controllerUser.js'

routerUser.route('/register')
      .post( userController.register)

export default routerUser;