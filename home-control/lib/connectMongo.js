'use strict'

const mongoose = require('mongoose')
const conex = mongoose.connection

const passwd = process.env.MONGO_SECRET
const db = process.env.MONGO_NAME

conex.on('error', (err) => {
    console.log(`Connection error ${err}`)
    process.exit(1)
})
conex.on('open', () => console.log(`Connection ${conex.name}`))

mongoose.connect(`mongodb+srv://new_user_test:${passwd}@homecontrol.xyjj2.gcp.mongodb.net/${db}?retryWrites=true&w=majority`
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = conex