import mongoose from 'mongoose';
import { QuoteSchema } from '../models/Model';

// constructor
const Quote = mongoose.model('Quote', QuoteSchema, 'quotes');

export const addNewQuote = (req, res) => {
  let newQuote = new Quote(req.body);

  newQuote.save((err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};

export const getQuotes = (req, res) => {
  Quote.find({}, (err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};
