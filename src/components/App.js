import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navigation from './static/Navigation';
import QuoteList from './QuoteList';
import NewQuoteForm from './NewQuoteForm';
import * as api from '../api';
import Landing from './static/Landing';
import Login from './auth/Login';
import Register from './auth/Register';
import UserContextProvider from '../context/UserContextProvider';
import { UserContext, UserConsumer } from '../context/UserContext';
import PrivateRoute from './private-route/PrivateRoute';
import QuotePage from './QuotePage';

const App = (props) => {
  const [state, updateState] = useState(props.initialData);

  // const pageHeader = () => {
  //   if (state.currentQuoteId) {
  //     return currentQuote().what;
  //   }
  //   return 'Quotd';
  // };
  const loginUser = (userData) => {
    api.loginUser(userData).then((user) => {
      this.setState({
        user,
      });
    });
  };

  return (
    <UserContextProvider>
      <UserConsumer>
        {({ isAuthenticated, user }) => (
          <div className="container-fluid">
            <Router>
              {isAuthenticated ? <Redirect to="/quotes" /> : console.log(user)}
              <div className="App">
                {/* <Navigation /> */}
                <Route exact path="/" component={Landing} />
                <Route exact path="/login">
                  <Login history={window.history} onLogin={loginUser} />
                </Route>
                <Route exact path="/register" component={Register} />
                <PrivateRoute
                  exact
                  path="/quotes"
                  component={QuotePage}
                  auth={isAuthenticated}
                ></PrivateRoute>
              </div>
            </Router>
          </div>
        )}
      </UserConsumer>
    </UserContextProvider>
  );
};

// class App extends React.Component {
//   // assign the context type
//   static contextType = UserContext;

//   // componentWillMount() {
//   //   console.log(this.context);
//   //   // Check for token to keep user logged in

//   // componentDidMount() {
//   //   onPopState((event) => {
//   //     this.setState({
//   //       currentQuoteId: (event.state || {}).currentQuoteId,
//   //     });
//   //   });
//   // }

//   // currentQuote() {
//   //   return this.state.quotes[this.state.currentQuoteId];
//   // }

//     return (
//       <div>
//       </div>
//     );
//   }

//   render() {}
// }

export default App;
