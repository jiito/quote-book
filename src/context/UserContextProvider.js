import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import * as api from '../api';
import { setAuthToken, loginUser } from '../api';
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

  componentWillMount() {
    localStorage.getItem('jwtToken') ? this.setState({ isAuthenticated: true }) : null;
  }

  loginUser = (userData) => {
    this.setState({
      user: userData,
    });
    console.log(this.state.user);
    api.loginUser(this.state.user);
    this.setState({
      isAuthenticated: true,
    });
  };

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
