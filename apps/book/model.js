'use strict';

var mongoose = require('../../config/mongoose'),
    bookSchema = require('./schema').bookSchema;

var models = {
    Book: mongoose.model('book', bookSchema)
}

module.exports = models;
