// this is where all api logic should be placed
import axios from 'axios';

export const fetchQuote = (quoteID) => {
  return axios.get(`/api/quotes/${quoteID}`).then((resp) => resp.data);
};

export const fetchQuoteList = () => {
  return axios.get(`/api/quotes`).then((resp) => resp.data);
};

// FIX TO SEND USER ID
export const postNewQuote = (who, what) => {
  return axios.post(`/api/quotes`, { who, what }).then((resp) => resp.data);
};

export const removeQuote = (_id) => {
  return axios.delete(`/api/quotes/${_id}`, { _id }).then((resp) => resp.data);
};

export const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every removeQuoteuest if logged in
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const registerUser = (userData) => {
  console.log('Api request');
  axios
    .post('/api/users/register', userData)
    .then((resp) => resp.data)
    .catch((err) => console.error(err));
};

export const loginUser = (userData) => {
  axios.post('/api/users/login', userData).then((res) => {
    // Set token to local storage
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    // Set token to Auth header
    setAuthToken(token);
    // Decode token to get user data
    const decoded = jwt_decode(toke);
    return decoded;
  });
};

export const logoutUser = () => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  return {};
};
