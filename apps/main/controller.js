'use strict';

var express = require('express'),
    router = express.Router();


router.route('/')

    .get(
      (req, res) =>
        res.render('main/index')
    );


module.exports = router;
