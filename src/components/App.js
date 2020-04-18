import React from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import QuoteList from './QuoteList';
import Quote from './Quote';
import * as api from '../api';

// implementing the history routing method
const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
  state = this.props.initialData;

  componentDidMount() {}

  fetchQuote = (quoteId) => {
    pushState({ currentQuoteId: quoteId }, `/quote/${quoteId}`);
    // look up quote
    api.fetchQuote(quoteId).then((quote) => {
      this.setState({
        currentQuoteId: quote.id,
        quotes: {
          ...this.state.quotes,
          [quote.id]: quote,
        },
      });
    });
  };

  pageHeader() {
    if (this.state.currentQuoteId) {
      return this.currentQuote().who;
    }
    return 'Quotebook';
  }

  currentQuote() {
    return this.state.quotes[this.state.currentQuoteId];
  }

  currentContent() {
    if (this.state.currentQuoteId) {
      return <Quote {...this.currentQuote()} />;
    }
    return <QuoteList onQuoteClick={this.fetchQuote} quotes={this.state.quotes} />;
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <h2 className="text-center">{this.pageHeader()}!</h2>
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
