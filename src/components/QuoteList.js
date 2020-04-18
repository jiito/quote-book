import React from 'react';
import Quote from './Quote';

const QuoteList = ({ quotes }) => (
  <div className="QuoteList">
    {quotes.map((quote) => (
      <Quote key={quote.id} {...quote} />
    ))}
  </div>
);

export default QuoteList;
