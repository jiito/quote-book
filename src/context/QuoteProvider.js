import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { setAuthToken } from '../api';
import { UserContext } from './UserContext';
import isEmpty from 'is-empty';

class QuoteProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: {},
      loading: false,
    };
  }

  logoutUser = () => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    this.setState({
      user: {},
    });
  };

  setCurrentUser = (user) => {
    this.setState({
      ...this.state,
      isAuthenticated: !isEmpty(user),
      user,
    });
  };

  loginUser = (userData) => {
    axios.post('/api/users/login', userData).then((res) => {
      // Set token to local storage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      return decoded;
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          logoutUser: this.logoutUser,
          loginUser: this.loginUser,
          setCurrentUser: this.setCurrentUser,
          ...this.state,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default QuoteProvider;
