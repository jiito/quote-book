import React, { Component } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
    this;
  }

  removeQuote = () => {
    this.props.onRemoveQuote(this.props._id);
  };

  render() {
    return (
      <div className="Quote">
        <div className="quote-author">{this.props.who}</div>
        <div className="quote-string">{this.props.what}</div>
        <div className="quote-location">{this.props.location}</div>
        <div className="button removeQuote">
          <button onClick={this.removeQuote}>remove quote</button>
        </div>
      </div>
    );
  }
}

export default Quote;
