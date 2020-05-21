import mongoose from 'mongoose';
import { QuoteSchema } from './QuoteModel';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    quotes: [QuoteSchema],
  },
  { timestamps: true },
);

const User = mongoose.model('users', UserSchema);
export default User;
