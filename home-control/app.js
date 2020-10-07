'use strict';
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const socketio = require('socket.io')
const app = express()
//const helmet = require('helmet')
const rpiRealys = require('./relayControl')



const server = require('http').createServer(app)
const io = socketio(server)


//app.use(helmet())
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

io.on('connection', (socket) => {
    console.log('A user connected')
    socket.on('relay', (msg) => {
        console.log(msg)
        let data = msg.split('%')
        console.log(data)
        rpiRealys.getState['channel'+data[1]] = parseInt(data[0])
        console.log(rpiRealys.getState)
    })
    socket.on('stateRealy', () => socket.emit('stateRealy', rpiRealys.getState()))
})


module.exports = { app: app, server: server }
