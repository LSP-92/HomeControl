'use strict';
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const socketio = require('socket.io')
const app = express()
const rpiRealys = require('./relayControl')



const server = require('http').createServer(app)
const io = socketio(server)


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', require('./routes/index'))
app.use('/login', require('./routes/login'))



module.exports = { app: app, server: server, io:io }
