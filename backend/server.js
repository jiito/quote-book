import express from 'express';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import config from '../config';
import apiRouter from './api';
import serverRender from './serverRender';
import passportConfig from './passport';

const server = express();

// body parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// use sass
server.use(
  sassMiddleware({
    src: path.join(__dirname, '..', 'sass'),
    dest: path.join(__dirname, '..', 'public'),
  }),
);

// using mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/QuotesBookdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// middlewares
server.use('/api', apiRouter);
server.use(express.static('public'));

// passport middleware
server.use(passport.initialize());

// Passport config
passportConfig(passport);

// use ejs
server.set('view engine', 'ejs');

server.get(['/', '/quote/:quoteID'], (req, res) => {
  serverRender(req.params.quoteID)
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
  console.info(` Express listening on port ${config.port}...`);
});
