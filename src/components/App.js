import React from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import QuoteList from './QuoteList';

class App extends React.Component {
  state = {
    pageHeader: 'Quotebook',
    quotes: this.props.initialData,
  };

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Navigation />
        <h2 className="text-center">{this.state.pageHeader}!</h2>
        <QuoteList quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
