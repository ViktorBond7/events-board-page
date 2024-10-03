import { model, Schema } from 'mongoose';
const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    event_date: {
      type: Date,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const EventCollection = model('events-boards', eventSchema);
