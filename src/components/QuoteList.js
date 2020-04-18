import React from 'react';
import Quote from './Quote';

const QuoteList = ({ onQuoteClick, quotes }) => (
  <div className="QuoteList">
    {quotes.map((quote) => (
      <Quote key={quote.id} onClick={onQuoteClick} {...quote} />
    ))}
  </div>
);

export default QuoteList;
