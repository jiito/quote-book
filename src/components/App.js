import React from 'react';
import Navigation from './Navigation';
import QuoteList from './QuoteList';
import Quote from './Quote';
import NewQuoteForm from './NewQuoteForm';
import * as api from '../api';
import { QuoteProvider } from '../context/QuoteContext';

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
    pushState({ currentQuoteId: null }, `/`);
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

  removeQuote = (_id) => {
    pushState({ currentQuoteId: null }, `/`);
    api.removeQuote(_id).then((removedQuote) => {
      console.log(this.state.quotes);
      delete this.state.quotes[removedQuote._id];
      this.setState({
        currentQuoteId: null,
      });
    });
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
          onRemoveQuote={this.removeQuote}
          onClick={this.fetchQuote}
        />
      );
    }
    return (
      <div>
        <QuoteList quotes={this.state.quotes} onRemoveQuote={this.removeQuote} />
        <NewQuoteForm onQuoteSubmit={this.addQuote} />
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <Navigation />
          <div className="container">
            <h2 className="text-center">{this.pageHeader()}!</h2>
            <QuoteProvider value={{ quoteList: this.state.quotes }}>
              {this.currentContent()}
            </QuoteProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
