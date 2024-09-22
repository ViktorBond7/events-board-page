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
  },
  { timestamps: true },
);

export const Registration = model('Registration', registrationSchema);
