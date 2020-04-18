import React from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import QuoteList from './QuoteList';

// implementing the history routing method
const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: 'Quotebook',
    quotes: this.props.initialQuotes,
  };

  componentDidMount() {}

  fetchQuote = (quoteId) => {
    pushState({ currentQuoteId: quoteId }, `/quote/${quoteId}`);
    // look up quote
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <h2 className="text-center">{this.state.pageHeader}!</h2>
        <QuoteList onQuoteClick={this.fetchQuote} quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
