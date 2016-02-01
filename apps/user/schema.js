'use strict';

var mongoose = require('../../config/mongoose'),
    Schema = mongoose.Schema,
    hash = require('./helper').hash;

var schemas = {

    userSchema : new Schema({
        username: { type: String, require: true },
        password: { type: String }
    })

};

schemas.userSchema.methods.validPassword = function(password) {
    return hash(password) === this.password;
}



module.exports = schemas;
