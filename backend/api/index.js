import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../../config';
import { addNewQuote, getQuotes } from '../src/controllers/controller';

let mdb;
MongoClient.connect(config.mongodbUri, (err, client) => {
  assert.equal(null, err);

  mdb = client.db('test');
});

const router = express.Router();

router.get('/quotes', getQuotes);

router.get('/quotes/:quoteID', (req, res) => {
  mdb
    .collection('quotes')
    .findOne({ _id: ObjectID(req.params.quoteID) })
    .then((quote) => {
      res.send(quote);
    })
    .catch(console.error);
});

router.post('/quotes', addNewQuote);

export default router;
