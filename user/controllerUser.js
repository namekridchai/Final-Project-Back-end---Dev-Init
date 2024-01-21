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
      res.send(`register successfully ${req.session.username}`);
    }
    else{
      res.status(400);
      res.send('this user_name is already registered');
    }   
}

const login = async(req,res)=>{
    const username = req.body.username;
    // console.log(username);
    const user_db = await User.findOne({user_name:username})
    if (!user_db){
        res.status(400);
        res.send(`no user name ${username} in system`);
        return;
    }

    const password = req.body.password;
    bcrypt.compare(password, user_db.password, async function(err, result) {
        if(result){
            const currentDate = new Date();
            user_db.last_login  = currentDate;
            await user_db.save();
            req.session.username = username;
            res.status(201);
            
            res.send(`login successfully for user ${req.session.username}`);

        }
        else{
            res.status(400);
            res.send(`wrong password  for user ${username}`);
            req.session.username
        }
    });
}
export default {register,login};