'use strict';

var crypto = require('crypto');

var helpers = {

    hash : (password) =>
        crypto.createHash('sha1').update(password).digest('base64')

}


module.exports = helpers;
