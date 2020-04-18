import React, { Component } from 'react';

class Quote extends Component {
  state = {};

  handleClick = () => {
    console.log(this.props.who);
  };

  render() {
    return (
      <div className="Quote" onClick={this.handleClick}>
        <div className="quote-author">{this.props.who}</div>
        <div className="quote-string">{this.props.what}</div>
      </div>
    );
  }
}

export default Quote;
