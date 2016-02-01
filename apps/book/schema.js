'use strict';

var mongoose = require('../../config/mongoose'),
    Schema = mongoose.Schema;


var schemas = {

    bookSchema : new Schema({
        title: { type: String },
        slug: { type: String },
        author: { type: String },
        summary: { type: String },
        image: { type: String }
    })

};


module.exports = schemas;
