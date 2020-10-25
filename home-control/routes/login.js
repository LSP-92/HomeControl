'use strict'
var express = require('express')
const User = require('../models/user')
var router = express.Router();
const bcrypt = require('bcrypt')



router.get('/', function(req, res, next) {
  res.render('login')

});

router.post('/', async function (req, res, next) {
  try {
    const dataUser = {}
    dataUser.name = req.body.email
    const user = await User.findOne(dataUser)
    if (!user.name) {
      res.redirect('login')
      return
    }
    const passwd = req.body.password
    const match = await bcrypt.compare(passwd, user.passwd)

    req.session.authUser = {
      _id: user._id
    };

    res.redirect('/')
    

  }catch (err){
    next()
  }
})



module.exports = router;
