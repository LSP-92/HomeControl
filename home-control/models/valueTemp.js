'use strict'

const mongoose = require('mongoose')

// Definimos el esquema
const adSchema = mongoose.Schema({
  valueMx: { type: Number, required: true },
  valueMn: { type: Number, required: true }
  
})


const ValueTemp = mongoose.model('ValueTemp', adSchema) 
module.exports = ValueTemp