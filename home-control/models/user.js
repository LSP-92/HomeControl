
'use strict'

const mongoose = require('mongoose')

// Definimos el esquema
const adSchema = mongoose.Schema({
  user: { type: String, required: true },
  passwd: { type: String, required: true}
})


const User = mongoose.model('User', adSchema) 
module.exports = User