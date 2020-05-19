import express from 'express';
import {
  addNewQuote,
  getQuotes,
  getQuoteWithID,
  updateQuote,
  deleteQuote,
} from '../src/controllers/QuoteController';
import userRouter from './routes/users/usersRouter';

const apiRouter = express.Router();

apiRouter.use('/users', userRouter);

apiRouter.get('/quotes', getQuotes);
apiRouter.post('/quotes', addNewQuote);

apiRouter.get('/quotes/:quoteID', getQuoteWithID);
apiRouter.put('/quotes/:quoteID', updateQuote);
apiRouter.delete('/quotes/:quoteID', deleteQuote);

export default apiRouter;
