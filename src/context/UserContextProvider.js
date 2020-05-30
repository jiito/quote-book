import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { setAuthToken } from '../api';
import { UserContext } from './UserContext';
import isEmpty from 'is-empty';

class UserContextProvider extends Component {
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
    console.log(`Setting the current user to ${user}`);
    this.setState({
      ...this.state,
      isAuthenticated: !isEmpty(user),
      user,
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

export default UserContextProvider;
