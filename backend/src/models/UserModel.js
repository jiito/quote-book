import mongoose from 'mongoose';

const { Schema } = mongoose;

const QuoteSchema = new Schema({
  author: {
    type: String,
    required: 'Enter who said it',
  },
  quote: {
    type: String,
    required: 'Enter what was said',
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

export default QuoteSchema;
