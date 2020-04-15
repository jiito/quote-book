import express from 'express';
import data from '../src/testData.json';

const router = express.Router();

router.get('/quotes', (req, res) => {
  res.send({
    quotes: data.quotes,
  });
});

export default router;
