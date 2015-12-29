'use strict';

var express = require('express'),
    router = express.Router();


router.route('/ingresar/')

    .get(
      (req, res) =>
        res.render('user/login')
    );

router.route('/registrar/')

    .get(
      (req, res) =>
        res.render('user/register')
    );

    
module.exports = router;
