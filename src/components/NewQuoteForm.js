import React, { useContext } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import FormInputError from './FormInputError';
import { QuoteContext } from '../context/QuoteContext';
import { UserContext } from '../context/UserContext';

function NewQuoteForm(props) {
  const { register, errors, handleSubmit } = useForm();

  // read in context
  const { addQuote } = useContext(QuoteContext);

  function onSubmit({ author, quote }) {
    addQuote(author, quote);
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
              ref={register({ required: 'Please add a quote.', pattern: /^[A-Za-z]+$/i })}
              className="form-control"
            />
            <ErrorMessage errors={errors} name="author">
              {({ message }) => <FormInputError message={message} />}
            </ErrorMessage>
          </div>
          <div className="form-group">
            <label className="control-label">What:</label>
            <input
              type="text"
              placeholder="What was said?"
              name="quote"
              ref={register({ required: 'Please add a quote.' })}
              className="form-control"
            />
            <ErrorMessage errors={errors} name="quote">
              {({ message }) => <FormInputError message={message} />}
            </ErrorMessage>
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
