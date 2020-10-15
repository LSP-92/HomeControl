'use strict';
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

/*const rpiRealys = require('./relayControl')*/



app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public', 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', require('./routes/index'))
app.use('/login', require('./routes/login'))
app.use('/singin', require('./routes/singin'))
app.use('/home-control', require('./routes/users'))
app.use('/control', require('./routes/control'))
app.use('/temperatura', require('./routes/index'))


io.on('connection', (socket) => {
  console.log('A user connected')
  socket.on('relay', (msg) => {
      console.log(msg)
      let data = msg.split('%')
      console.log(data)
      socket.emit('request', data)
      /*rpiRealys.getState['channel'+data[1]] = parseInt(data[0])
      console.log(rpiRealys.getState)*/
  })
  /*socket.on('stateRealy', () => socket.emit('stateRealy', rpiRealys.getState()))*/
})

module.exports = { app: app, server: server }
