import React, { useState } from 'react';

f;

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

  handleSubmit(event) {
    event.preventDefault();
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
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Add a new quote</h3>
          <form>
            <div className="form-group">
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
            <div className="form-group">
              <label className="control-label" htmlFor="what">
                What:
              </label>
              <input
                type="text"
                id="what"
                placeholder="What was said?"
                name="what"
                value={this.state.what}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Submit
              </button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

export default MakeQuote;
