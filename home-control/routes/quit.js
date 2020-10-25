'use strict';
const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    req.session.regenerate((err) => {
        if(err) {
            next()
        }
        res.redirect('login')
    })
})

module.exports = router