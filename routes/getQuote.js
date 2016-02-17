'use strict';

const express = require('express');
const router = express.Router();
const request = require('request');

const getQuote = require('../controllers/getQuote');

router.get('/getquote', getQuote);
router.post('/getquote', getQuote.find);

module.exports = router;