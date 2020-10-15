'use strict';
const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  const temperatura = req.query.temp
  res.sendStatus(200)
});


module.exports = router