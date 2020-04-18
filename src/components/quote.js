import React, { Component } from 'react';

class Quote extends Component {
  state = {};

  handleClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <div className="link Quote" onClick={this.handleClick}>
        <div className="quote-author">{this.props.who}</div>
        <div className="quote-string">{this.props.what}</div>
      </div>
    );
  }
}

export default Quote;
