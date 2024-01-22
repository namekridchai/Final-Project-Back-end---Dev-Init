import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoListSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'Users' },
    title: String,
    description: String,
    duedate: Date,
    priority: Number,
    status:Number,
},{
    timestamps: {
        createdAt: 'created_at' // Use `created_at` to store the created date
      }
 }
);

const TodoList = mongoose.model('TodoList', todoListSchema);
export default  TodoList;