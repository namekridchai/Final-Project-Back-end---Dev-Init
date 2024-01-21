import User from '../model/user.js';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const register = async(req,res)=>{
    const username = req.body.username; 
    const password  = req.body.password; 
    const currentDate = new Date();
    const user = await User.findOne({ user_name: username });
    
    if(!user){
      bcrypt.hash(password, saltRounds, async function(err, hash) {
      const newUser = new User({user_name:username,
                                password:hash,
                                email:req.body.email,
                                last_login:currentDate})
      await newUser.save()
      req.session.username = username;
        // Store hash in your password DB.
      });
      res.status(201);
      res.send('register successfully');
    }
    else{
      res.status(404);
      res.send('this user_name is already registered');
    }   
}
export default {register};