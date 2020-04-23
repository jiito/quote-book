import React, { Component } from 'react';

class MakeQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      who: '',
      what: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.onQuoteSubmit(this.state.who, this.state.what);
  }

  handleChange(event) {
    const key = event.target.name;
    const { value } = event.target;
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <div className="MakeQuote panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Add a new quote </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <p>Who:</p>
              <input
                type="text"
                placeholder="Who said it?"
                name="who"
                value={this.state.who}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="input-group">
              <p>What:</p>
              <input
                type="text"
                placeholder="What was said?"
                name="what"
                value={this.state.what}
                onChange={this.handleChange}
                className="form-control"
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MakeQuote;
