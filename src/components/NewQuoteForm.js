import React from 'react';
import { useInput } from '../hooks/input-hook';

function NewQuoteForm(props) {
  const { value: author, bind: bindAuthor, reset: resetAuthor } = useInput('');
  const { value: quote, bind: bindQuote, reset: resetQuote } = useInput('');

  function handleSubmit(event) {
    event.preventDefault();
    props.onQuoteSubmit(author, quote);
    resetAuthor();
    resetQuote();
  }

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
              name="author"
              {...bindAuthor}
              className="form-control"
              required
            />
            <div className="invalid-feedback">Please add a person.</div>
          </div>
          <div className="form-group">
            <label className="control-label">What:</label>
            <input
              type="text"
              placeholder="What was said?"
              name="quote"
              {...bindQuote}
              className="form-control"
              required
            />
            <div className="invalid-feedback">Please add a quote.</div>
          </div>
          <span className="input-group-btn">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default NewQuoteForm;
