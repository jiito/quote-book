import React from 'react';
import { UserConsumer } from '../../context/UserContext';

const Navigation = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <p className="navbar-text">The Quotebook</p>
          <UserConsumer>
            {({ isAuthenticated, logoutUser }) => {
              if (isAuthenticated) {
                return (
                  <button className="btn btn-primary" onClick={logoutUser}>
                    logout
                  </button>
                );
              }
            }}
          </UserConsumer>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
