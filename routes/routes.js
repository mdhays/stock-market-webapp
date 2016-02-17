'use strict';

const express = require('express');
const router = express.Router();

const home = require('./home');
const getQuote = require('./getQuote');

router.use(home);
router.use(getQuote);

module.exports = router;