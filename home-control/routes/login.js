'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login')

});

router.post('/', function(req, res, next) {
    res.sendStatus(200)
  });
  

module.exports = router;