import React from 'react';

const QuoteContext = React.createContext({});

export const QuoteProvider = QuoteContext.Provider;
export const QuoteConsumer = QuoteContext.Consumer;
