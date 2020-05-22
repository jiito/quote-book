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
