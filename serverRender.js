// fetch the data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';
import axios from 'axios';
import config from './config';

const getApiUrl = (quoteID) => {
  if (quoteID) {
    return `${config.serverUrl}/api/quotes/${quoteID}`;
  }
  return `${config.serverUrl}/api/quotes`;
};

const getInitialData = (quoteID, apiData) => {
  if (quoteID) {
    return {
      currentQuoteId: apiData.id,
      quotes: {
        [apiData.id]: apiData,
      },
    };
  }

  return {
    quotes: apiData,
  };
};

const serverRender = (quoteID) =>
  axios.get(getApiUrl(quoteID)).then((resp) => {
    const initialData = getInitialData(quoteID, resp.data);
    // console.log(initialData);
    return {
      initialMarkup: ReactDOMServer.renderToString(<App initialData={initialData} />),
      initialData,
    };
  });

// axios.get(getApiUrl(quoteID)).then((resp) => {
//   const initialData = getInitialData(quoteID, resp.data);
//   console.log(initialData);
//   return {
//     initialMarkup: ReactDOMServer.renderToString(<App initialData={initialData} />),
//     initialData,
//   };
// });

export default serverRender;
