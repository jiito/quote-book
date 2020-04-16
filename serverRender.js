// fetch the data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';
import axios from 'axios';
import config from './config';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/quotes`).then((resp) => {
    return ReactDOMServer.renderToString(<App initialData={resp.data.quotes} />);
  });

export default serverRender;
