import mongoose from 'mongoose';
const { Schema } = mongoose;

const calendarEventSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'Users' },
    title: String,
    description:String,
    start_date:Date,
    end_date:Date
},{
    timestamps: {
        createdAt: 'created_at' // Use `created_at` to store the created date
      }
 }
);

const CalendarEvents = mongoose.model('CalendarEvents', calendarEventSchema);
module.exports = CalendarEvents;