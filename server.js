import express from 'express';
import apiRouter from './api';

const server = express();

// middlewares
server.use('/api', apiRouter);
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.send('Get request on / route');
});

server.listen(8000, () => {
  console.info('Express listening on port 8000...');
});
