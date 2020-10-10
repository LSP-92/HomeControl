'use strict';
const express = require('express')
const router = express.Router()
const io = require('../app.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});


/* io.on('connection', (socket) => {
  console.log('A user connected')
  socket.on('relay', (msg) => {
      console.log(msg)
      let data = msg.split('%')
      console.log(data)
      rpiRealys.getState['channel'+data[1]] = parseInt(data[0])
      console.log(rpiRealys.getState)
  })
  socket.on('stateRealy', () => socket.emit('stateRealy', rpiRealys.getState()))
}) */

module.exports = router
