import React from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Quote from './Quote';

class App extends React.Component {
  state = {
    pageHeader: 'Quotebook',
    quotes: [],
  };

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    axios
      .get('/api/quotes')
      .then((resp) => {
        this.setState({
          quotes: resp.data.quotes,
        });
      })
      .catch(console.error());
  }

  render() {
    return (
      <div>
        <Navigation />
        <h2 className="text-center">{this.state.pageHeader}!</h2>
        <div>
          {this.state.quotes.map((quote) => (
            <Quote key={quote.id} {...quote} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
