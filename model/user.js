import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  user_name: String, // String is shorthand for {type: String}
  password: String,
  email: String,
  last_login: Date,
},
{
  timestamps: {
      createdAt: 'created_at' // Use `created_at` to store the created date
    }
});

const User = mongoose.model('Users', userSchema);
export default User;