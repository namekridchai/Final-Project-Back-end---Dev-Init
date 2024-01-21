import session from 'express-session'
import express  from 'express';
import mongoose from 'mongoose';
import routerUser from './user/routeUser.js';
import routerLog from './daily_log/routeLog.js';
const app = express()
const port = 3000





app.use(session({ secret: 'keyboard cat', saveUninitialized : false}))
app.use(express.json());
app.use('/users', routerUser);
app.use('/logs',routerLog);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoListDB');
  console.log('connect to mongo completely')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/', (req, res) => {
  if (!req.session.views)
      req.session.views = 1;
  else{
    req.session.views +=1;
  }
  res.send('welcome to to-do list')
   
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().catch(err => console.log(err));