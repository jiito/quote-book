import React from 'react';
import { useInput } from '../hooks/input-hook';
import { useForm } from 'react-hook-form';

function NewQuoteForm(props) {
  // const { value: author, bind: bindAuthor, reset: resetAuthor } = useInput('');
  // const { value: quote, bind: bindQuote, reset: resetQuote } = useInput('');

  const { register, handleSubmit } = useForm();

  function onSubmit({ author, quote }) {
    //console.log(data);
    props.onQuoteSubmit(author, quote);
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
              ref={register}
              className="form-control"
            />
            <div className="invalid-feedback">Please add a person.</div>
          </div>
          <div className="form-group">
            <label className="control-label">What:</label>
            <input
              type="text"
              placeholder="What was said?"
              name="quote"
              ref={register}
              className="form-control"
            />
            <div className="invalid-feedback">Please add a quote.</div>
          </div>
          <span className="input-group-btn">
            <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
              Submit
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default NewQuoteForm;
