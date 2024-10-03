import { model, Schema } from 'mongoose';
const registrationSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    referral: {
      type: String,
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'events-boards',
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Registration = model('registration', registrationSchema);
