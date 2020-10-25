'use strict';
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express()
require('./lib/connectMongo')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const session = require('express-session')
const sessionAuth = require('./lib/checkCookie')

/*const rpiRealys = require('./relayControl')*/  



app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  name: 'HomeControl-session',
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 // 1 hora de inactividad
  }
}))




app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public', 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


app.use('/login', require('./routes/login'))
app.use('/',  sessionAuth(), require('./routes/index'))
app.use('/singin', require('./routes/singin'))
app.use('/home-control',sessionAuth(), require('./routes/users'))
app.use('/control', sessionAuth(), require('./routes/control'))
app.use('/quit', require('./routes/quit'))
app.use('/temperatura', require('./routes/temp'))


io.on('connection', (socket) => {
  console.log('A user connected')
  socket.on('relay', (msg) => {
      console.log(msg)
      let data = msg.split('%')      
      /*rpiRealys.getState['channel'+data[1]] = parseInt(data[0])
      console.log(rpiRealys.getState)*/
  })
  /*socket.on('stateRealy', () => socket.emit('stateRealy', rpiRealys.getState()))*/
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('404')
});

module.exports = { app: app, server: server }
