'use strict';
const express = require('express')
const router = express.Router()
const ValueTemp = require('../models/valueTemp')

router.get('/', function(req, res, next) {
  res.render('control')
})

router.post('/dataTemp', async function(req, res, next) {
  const valueReq = {}
  valueReq.valueMx = req.query.mxTemp
  valueReq.valueMn = req.query.mnTemp

  await ValueTemp.deleteMany()
  await ValueTemp.insertMany(valueReq)

  res.sendStatus(200)
})

router.get('/user', function(req, res, next) {
  res.redirect('control')
})


module.exports = router
