'use strict';

var mongoose = require('../../config/mongoose'),
    userSchema = require('./schema').userSchema;

var models = {

    User: mongoose.model('user', userSchema)
}

module.exports = models;
