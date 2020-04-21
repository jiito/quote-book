import React, { Component } from 'react';

class MakeQuote extends Component {
  render() {
    return (
      <div className="MakeQuote panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Add a new quote </h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder="Who said it?"
                ref="newWhoInput"
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