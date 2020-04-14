import express from 'express';
import apiRouter from './api';

const server = express();

// middlewares
server.use('/api', apiRouter);
server.use(express.static('public'));

// use ejs
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    title: 'Quote Book',
  });
});

server.listen(8080, () => {
  console.info('Express listening on port 8080...');
});
