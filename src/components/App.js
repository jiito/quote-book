import React from 'react';
import Navigation from './Navigation';
import Quote from './quote';

class App extends React.Component {
  state = {
    pageHeader: 'Quotebook',
  };

  render() {
    return (
      <div>
        <Navigation />
        <h2 className="text-center">{this.state.pageHeader}!</h2>
        <div>
          {this.props.quotes.map((contest) => (
            <Quote {...contest} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
