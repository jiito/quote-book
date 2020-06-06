import React, { useState, useContext } from 'react';
import * as api from '../api';

import { QuoteContext } from './QuoteContext';
import { UserContext } from './UserContext';

const QuoteProvider = (props) => {
  const [quotes, setQuotes] = useState([]);

  const { user } = useContext(UserContext);

  const addQuote = (author, quote) => {
    api
      .postNewQuote(author, quote)
      .then((newQuote) => {
        console.log(newQuote);
        setQuotes(quotes.push(newQuote));
      })
      .catch(console.error);
  };

  const removeQuote = (_id) => {
    api.removeQuote(_id).then((removedQuote) => {
      delete this.state.quotes[removedQuote._id];
    });
  };

  return (
    <QuoteContext.Provider
      value={{
        quotes,
        addQuote,
        removeQuote,
      }}
    >
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteProvider;
