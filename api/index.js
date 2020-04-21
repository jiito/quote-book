import express from 'express';
import { MongoClient } from 'mongodb';
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
    .each((err, quote) => {
      assert.equal(null, err);

      if (!quote) {
        res.send(quotes);
        return;
      }
      quotes[quote.id] = quote;
    });
});

router.get('/quotes/:quoteID', (req, res) => {});

export default router;
