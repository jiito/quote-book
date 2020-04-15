import React from 'react';

const Quote = (quote) => (
  <div className="Quote">
    <div className="quote-author">{quote.who}</div>
    <div className="quote-string">{quote.what}</div>
  </div>
);

export default Quote;
