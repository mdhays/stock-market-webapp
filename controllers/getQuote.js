'use strict';

module.exports = (req, res) => {
  res.render('queryResult', {
    name: '',
    Symbol: '',
    Timestamp: '',
    LastPrice: ''
  });
};

module.exports.find = (req, res) => {

  console.log('welcome to the twilight zone.');
  const userFind = req.body.quoteQuery;
  const queryResult = require('../services/querySRVC');

  const final = queryResult(userFind, req, res);
};