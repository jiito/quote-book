import React from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import QuoteList from './QuoteList';
import Quote from './Quote';
import MakeQuote from './MakeQuote';
import * as api from '../api';

// implementing the history routing method
const pushState = (obj, url) => window.history.pushState(obj, '', url);
const onPopState = (handler) => {
  window.onpopstate = handler;
};

class App extends React.Component {
  state = this.props.initialData;

  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentQuoteId: (event.state || {}).currentQuoteId,
      });
    });
  }

  fetchQuote = (quoteId) => {
    pushState({ currentQuoteId: quoteId }, `/quote/${quoteId}`);
    // look up quote
    api.fetchQuote(quoteId).then((quote) => {
      this.setState({
        currentQuoteId: quote._id,
        quotes: {
          ...this.state.quotes,
          [quote._id]: quote,
        },
      });
    });
  };

  fetchQuoteList = () => {
    pushState({ currentQuoteId: null }, `/`);
    // look up quote
    api.fetchQuoteList().then((quoteList) => {
      this.setState({
        currentQuoteId: null,
        quotes: quoteList,
      });
    });
  };

  addQuote = (who, what) => {
    api
      .postNewQuote(who, what)
      .then((newQuote) => {
        this.setState({
          quotes: {
            ...this.state.quotes,
            [newQuote._id]: newQuote,
          },
        });
      })
      .catch(console.error);
  };

  pageHeader() {
    if (this.state.currentQuoteId) {
      return this.currentQuote().what;
    }
    return 'Quotebook';
  }

  currentQuote() {
    return this.state.quotes[this.state.currentQuoteId];
  }

  currentContent() {
    if (this.state.currentQuoteId) {
      return (
        <Quote
          {...this.currentQuote()}
          currentQuote={this.state.currentQuoteId}
          onHomeClick={this.fetchQuoteList}
        />
      );
    }
    return (
      <div>
        <QuoteList onQuoteClick={this.fetchQuote} quotes={this.state.quotes} />
        <MakeQuote onQuoteSubmit={this.addQuote} />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {/* <Navigation /> */}
        <h2 className="text-center">{this.pageHeader()}!</h2>
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
