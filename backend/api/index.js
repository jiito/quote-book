import express from 'express';
import {
  addNewQuote,
  getQuotes,
  getQuoteWithID,
  updateQuote,
  deleteQuote,
} from '../src/controllers/QuoteController';

const apiRouter = express.Router();

apiRouter.get('/quotes', getQuotes);
apiRouter.post('/quotes', addNewQuote);

apiRouter.get('/quotes/:quoteID', getQuoteWithID);
apiRouter.put('/quotes/:quoteID', updateQuote);
apiRouter.delete('/quotes/:quoteID', deleteQuote);

export default apiRouter;
