'use strict';
const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  res.render('control')
})

router.get('/dataTemp', function(req, res, next) {
  const tempMax = req.query.mxTemp
  const tempMin = req.query.mnTemp
  res.sendStatus(200)
})

router.get('/user', function(req, res, next) {
  console.log(req.query)
  res.redirect('/control')
})


module.exports = router
