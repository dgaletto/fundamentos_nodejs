'use strict';

var express = require('express'),
    router = express.Router();


router.route('/')

    .get(
      (req, res) =>
        res.render('main/home')
    );


router.route('/otra-url')

    .get(
      (req, res) =>
        res.send('Otra URL')
    );


module.exports = router;
