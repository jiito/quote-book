import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="container align-content-center">
      <div className="title row justify-content-center text-center">
        <div className="col-md-10">
          <div className="display-2">Quotd</div>
        </div>
      </div>
      <div className=" row justify-content-center text-center">
        <div className="col-sm-4">
          <Link to="/register">
            <button className="btn btn-primary btn-lg mr-2">Register</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-outline-dark btn-lg ml-2">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
