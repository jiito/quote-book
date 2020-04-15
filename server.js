import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

// use sass
server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
  }),
);

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
