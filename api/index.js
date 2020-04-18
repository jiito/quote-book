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

router.get('/quotes/:quoteID', (req, res) => {
  let quote = quotes[req.params.quoteID];
  quote.description =
    'Lorem ipsum this is a gibberish description to test that the api is working ';

  res.send(quote);
});

export default router;
