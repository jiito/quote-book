import express from 'express';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';
import config from './config';
import apiRouter from './api';
import serverRender from './serverRender';

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
  serverRender()
    .then(({ initialMarkup, initialData }) => {
      // feed ejs template the content
      res.render('index', {
        content: initialMarkup,
        data: initialData,
      });
    })
    .catch(console.error);
});

server.listen(config.port, config.host, () => {
  console.info(`Express listening on port ${config.port}...`);
});
