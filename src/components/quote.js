import React, { Component } from 'react';

class Quote extends Component {
  state = {};

  handleClick = () => {
    this.props.onClick(this.props.id);
  };

  linkHome() {
    if (this.props.currentQuote) {
      return (
        <div className="link link-home" onClick={this.props.onHomeClick}>
          Return Home
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <div className="link Quote" onClick={this.handleClick}>
          <div className="quote-author">{this.props.who}</div>
          <div className="quote-string">{this.props.what}</div>
        </div>
        {this.linkHome()}
      </div>
    );
  }
}

export default Quote;
