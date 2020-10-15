
'use strict'

const mongoose = require('mongoose')

// Definimos el esquema
const adSchema = mongoose.Schema({
  value: { type: Number, required: true }
})


const Temp = mongoose.model('Temperatura', adSchema) 
module.exports = Temp