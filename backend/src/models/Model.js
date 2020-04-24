import mongoose from 'mongoose';

const { Schema } = mongoose;

export const QuoteSchema = new Schema({
  who: {
    type: String,
    required: 'Enter who said it',
  },
  what: {
    type: String,
    required: 'Enter what was said',
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
