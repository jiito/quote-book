import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, client) => {
  assert.equal(err, null);

  client
    .db('test')
    .collection('quotes')
    .insertMany([
      {
        id: 1,
        categoryName: 'Funny',
        who: 'Dr. Seuss',
        what: 'Don’t cry because it’s over, smile because it happened.',
        location: 'Middlebury College',
      },
    ]);
});
