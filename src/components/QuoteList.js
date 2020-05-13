import React from 'react';
import Quote from './Quote';
import { QuoteConsumer } from '../context/QuoteContext';

const QuoteList = ({ onRemoveQuote }) => (
  <QuoteConsumer>
    {({ quoteList }) =>
      quoteList ? (
        <div className="QuoteList card-columns">
          {Object.keys(quoteList).map((quoteId) => (
            <Quote key={quoteId} {...quoteList[quoteId]} onRemoveQuote={onRemoveQuote} />
          ))}
        </div>
      ) : null
    }
  </QuoteConsumer>
);

export default QuoteList;
