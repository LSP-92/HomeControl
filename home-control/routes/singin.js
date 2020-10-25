'use strict'
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const BCRYPT_SALT_ROUNDS = 12

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('singin')
})


router.post('/', async function(req, res, next) {
try {
  const dataUser = {}

  if (req.body.email) {
    dataUser.name = req.body.email
    const hashPasswd = await bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS)
    dataUser.passwd = hashPasswd
    const user = new User(dataUser)
    await user.save(user)

  } else {
    res.sendStatus(400)
  }
    res.redirect('../login')

  } catch (err){
    console.log(err)
    res.sendStatus(500)
  }
})

module.exports = router


/* const idCookie = await bcrypt.hash(dataUser.name, 12, (err, encryptId) {
  if (err) {
    res.sendStatus(500)
    console.log(err, 'Error generar ID')
  }
  

}) */