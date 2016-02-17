'use strict';

const request = require('request');

// This is called from getQuote.js in controllers
module.exports = (symbol, req, res) => {
  // This is our url for getting quotes.
  // The ${symbol} is our embedded expression that will be generated when this function/module triggers. 
  let url = `http://dev.markitondemand.com/Api/v2/Quote/json?symbol=${symbol}`;
  
  // This is using request to make an http 'get' request.
  // The first argument is the url I'm making my request to and the second is a callback function
  // who's first argument is the error handler, second is the response, and the third is the html (body)
  // of the page. For reference, see https://github.com/request/request.

  request.get(url, (err, response, body) => {
    if (err) {throw err};
    // JSON.parse will parse the string we recieve as response.body as a JSON object.
    const quote = JSON.parse(response.body);

    res.render('queryResult', {
      Name: quote.Name,
      Symbol: quote.Symbol,
      LastPrice: quote.LastPrice,
      Timestamp: quote.Timestamp
    });
  });
};