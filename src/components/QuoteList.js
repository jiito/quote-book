import React from 'react';
import Quote from './Quote';
import { UserConsumer } from '../context/UserContext';

const QuoteList = ({ onRemoveQuote }) => (
  <UserConsumer>
    {({ quoteList }) =>
      quoteList ? (
        <div className="QuoteList">
          {Object.keys(quoteList).map((quoteId) => (
            <Quote key={quoteId} {...quoteList[quoteId]} onRemoveQuote={onRemoveQuote} />
          ))}
        </div>
      ) : null
    }
  </UserConsumer>
);

export default QuoteList;
