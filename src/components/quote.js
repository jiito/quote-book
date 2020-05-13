import React, { Component } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.removeQuote = this.removeQuote.bind(this);
  }

  removeQuote = () => {
    this.props.onRemoveQuote(this.props._id);
  };

  render() {
    return (
      <div className="Quote card">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p className="quote-string">{this.props.what}</p>
            <footer className="blockquote-footer">{this.props.who}</footer>
          </blockquote>
          <button className="button btn-primary" onClick={this.removeQuote}>
            remove
          </button>
        </div>
      </div>
    );
  }
}

export default Quote;
