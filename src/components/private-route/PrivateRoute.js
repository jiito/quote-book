import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserConsumer } from '../../context/UserContext';
import QuotePage from '../QuotePage';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <UserConsumer>
      {({ isAuthenticated }) => (
        <Route
          {...rest}
          render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
        />
      )}
    </UserConsumer>
  );
};

export default PrivateRoute;
