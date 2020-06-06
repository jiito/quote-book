import React from 'react';
import QuoteList from './QuoteList';
import NewQuoteForm from './NewQuoteForm';
import { QuoteConsumer } from '../context/QuoteContext';
import QuoteProvider from '../context/QuoteProvider';

const QuotePage = () => {
  console.log('Trying to render the quote page');
  return (
    <div className="container">
      <h2 className="text-center">quotd</h2>
      <QuoteProvider>
        <QuoteConsumer>
          {({ quotes, removeQuote, addQuote }) => (
            <div className="QuotePage">
              <QuoteList quotes={quotes} onRemoveQuote={removeQuote} />
              <NewQuoteForm onQuoteSubmit={addQuote} />
            </div>
          )}
        </QuoteConsumer>
      </QuoteProvider>
    </div>
  );
};

export default QuotePage;
