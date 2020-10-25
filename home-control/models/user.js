'use strict'
const mongoose = require('mongoose')


const adSchema = mongoose.Schema({
    name: { type: String },
    passwd: { type: String }
})

adSchema.statics.filter = function (user) {
    const query = User.find(user)
    return query.exec()
}

const User = mongoose.model('User', adSchema) 
 
module.exports = User