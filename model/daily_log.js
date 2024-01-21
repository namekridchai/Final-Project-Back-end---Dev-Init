import mongoose from 'mongoose';
const { Schema } = mongoose;

const dailyLogSchema = new Schema({
  
    user_id: { type: Schema.Types.ObjectId, ref: 'Users' },
    content:String,
    date:Date
},
 {
    timestamps: {
        createdAt: 'created_at' // Use `created_at` to store the created date
      }
 }
    
);

const DailyLog = mongoose.model('DailyLogs', dailyLogSchema);
export default  DailyLog;