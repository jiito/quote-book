import React from 'react';
import Quote from './Quote';

const QuoteList = ({ quotes, onRemoveQuote }) => (
  <div className="QuoteList">
    {Object.keys(quotes).map((quoteId) => (
      <Quote key={quoteId} {...quotes[quoteId]} onRemoveQuote={onRemoveQuote} />
    ))}
  </div>
);

export default QuoteList;
