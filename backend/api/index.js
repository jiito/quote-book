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
apiRouter.delete('/quotes/', deleteQuote);

apiRouter.get('/quotes/:quoteID', getQuoteWithID);
apiRouter.put('/quotes/:quoteID', updateQuote);

export default apiRouter;
