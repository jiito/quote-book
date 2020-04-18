import express from 'express';
import data from '../src/testData.json';

const router = express.Router();
const quotes = data.quotes.reduce((obj, quote) => {
  obj[quote.id] = quote;
  return obj;
}, {});

router.get('/quotes', (req, res) => {
  res.send({
    // map quotes to object
    quotes,
  });
});

export default router;
