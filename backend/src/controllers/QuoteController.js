import Quote from '../models/QuoteModel';

export const addNewQuote = (req, res) => {
  let newQuote = new Quote(req.body);

  newQuote.save((err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};

export const getQuotes = (req, res) => {
  Quote.find({}, (err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};

export const getQuoteWithID = (req, res) => {
  Quote.findById(req.params.quoteID, (err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};

export const updateQuote = (req, res) => {
  Quote.findOneAndUpdate(
    { _id: req.params.quoteID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, quote) => {
      if (err) {
        res.send(err);
      }
      res.json(quote);
    },
  );
};

export const deleteQuote = (req, res) => {
  Quote.deleteOne({ _id: req.params.quoteID }, (err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json({
      _id: req.params.quoteID,
    });
  });
};
