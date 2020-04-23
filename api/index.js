import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, client) => {
  assert.equal(null, err);

  mdb = client.db('test');
});

const router = express.Router();

router.get('/quotes', (req, res) => {
  let quotes = {};
  mdb
    .collection('quotes')
    .find({})
    .project({
      who: 1,
      what: 1,
    })
    .each((err, quote) => {
      assert.equal(null, err);

      if (!quote) {
        res.send(quotes);
        return;
      }
      quotes[quote._id] = quote;
    });
});

router.get('/quotes/:quoteID', (req, res) => {
  mdb
    .collection('quotes')
    .findOne({ _id: ObjectID(req.params.quoteID) })
    .then((quote) => {
      res.send(quote);
    })
    .catch(console.error);
});

router.post('/quotes', (req, res) => {
  //req.body
  console.log(req.body);
});

export default router;
