'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/libreria');


module.exports = mongoose;
