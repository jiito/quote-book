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

// implementing the history routing method
const pushState = (obj, url) => window.history.pushState(obj, '', url);
const onPopState = (handler) => {
  window.onpopstate = handler;
};

// const currentContent = () => {
//   if (this.state.currentQuoteId) {
//     return (
//       <Quote
//         {...this.currentQuote()}
//         currentQuote={this.state.currentQuoteId}
//         onHomeClick={this.fetchQuoteList}
//         onRemoveQuote={this.removeQuote}
//         onClick={this.fetchQuote}
//       />
//     );
//   }
// };

// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   api.setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   this.context.setCurrentUser(decoded);
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     this.context.logoutUser();
//     // Redirect to login
//     window.location.href = './login';
//   }
// }

const App = (props) => {
  const [state, updateState] = useState(props.initialData);

  const addQuote = (who, what) => {
    pushState({ currentQuoteId: null }, `/`);
    api
      .postNewQuote(who, what)
      .then((newQuote) => {
        this.setState({
          quotes: {
            ...state.quotes,
            [newQuote._id]: newQuote,
          },
        });
      })
      .catch(console.error);
  };

  const removeQuote = (_id) => {
    pushState({ currentQuoteId: null }, `/`);
    api.removeQuote(_id).then((removedQuote) => {
      console.log(state.quotes);
      delete state.quotes[removedQuote._id];
    });
  };

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
                <Navigation />
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

//   // fetchQuote = (quoteId) => {
//   //   pushState({ currentQuoteId: quoteId }, `/quote/${quoteId}`);
//   //   // look up quote
//   //   api.fetchQuote(quoteId).then((quote) => {
//   //     this.setState({
//   //       currentQuoteId: quote._id,
//   //       quotes: {
//   //         ...this.state.quotes,
//   //         [quote._id]: quote,
//   //       },
//   //     });
//   //   });
//   // };

//   // fetchQuoteList = () => {
//   //   pushState({ currentQuoteId: null }, `/`);
//   //   // look up quote
//   //   api.fetchQuoteList().then((quoteList) => {
//   //     this.setState({
//   //       currentQuoteId: null,
//   //       quotes: quoteList,
//   //     });
//   //   });
//   // };

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
