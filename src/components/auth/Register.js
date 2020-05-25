import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInputError from '../FormInputError';

function Register(props) {
  const { register, errors, handleSubmit } = useForm();

  function onSubmit({ author, quote }) {
    // props.onQuoteSubmit(author, quote);
  }

  return (
    <div className="container">
      <Link to="/">Back to home</Link>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
            <b>Register</b>
          </h3>
          <form>
            <div className="form-group">
              <p>Name</p>
              <input
                type="text"
                id="name"
                ref={register({ required: 'Please enter your name' })}
                className="form-control"
              />
              <ErrorMessage errors={errors} name="name">
                {({ message }) => <FormInputError message={message} />}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <p>Email</p>
              <input
                type="email"
                id="email"
                ref={register({ required: 'Please enter your email' })}
                className="form-control"
              />
              <ErrorMessage errors={errors} name="email">
                {({ message }) => <FormInputError message={message} />}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <input
                type="password"
                id="password"
                ref={register({ required: 'Please type your password' })}
                className="form-control"
              />
              <ErrorMessage errors={errors} name="password">
                {({ message }) => <FormInputError message={message} />}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <label className="control-label">Confirm Password</label>
              <input
                type="password"
                id="password2"
                ref={register({ required: 'Please confirm your password' })}
                className="form-control"
              />
              <ErrorMessage errors={errors} name="password2">
                {({ message }) => <FormInputError message={message} />}
              </ErrorMessage>
            </div>
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
                Sign Up
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
