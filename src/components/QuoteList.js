import React from 'react';
import Quote from './Quote';

const QuoteList = ({ onQuoteClick, quotes }) => (
  <div className="QuoteList">
    {Object.keys(quotes).map((quoteId) => (
      <Quote key={quoteId} onClick={onQuoteClick} {...quotes[quoteId]} />
    ))}
  </div>
);

export default QuoteList;
