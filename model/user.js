import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  user_name: String, // String is shorthand for {type: String}
  password: String,
  email: String,
  create_at: Date,
  last_login: Date,
});

const User = mongoose.model('Users', userSchema);
module.exports = User;